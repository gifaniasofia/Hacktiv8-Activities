Step-step :
1. Install node-postgres di folder project.
```
$ npm init -y
$ npm install pg
```

2. Bikin .gitignore dan masukin node_modules di .gitignore soalnya haram buat pullreq node_modules ke repo
```
$ touch .gitignore
$ ll ---> utk ngecek list file2 di dalam folder
$ echo "node_modules/" > .gitignore
```

3. Bikin folder config dan di dalamnya bikin config.js
```
$ mkdir config
```
config.js
```js
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'polldb',
  password: 'Fajri1624',
  port: 5432,
})

client.connect()

module.exports = client;
```

4. Bikin database di psql. Masuk ke postgres dulu di command prompt
```
> psql -U postgres
> CREATE TABLE <database_name>;
```

5. Connect database di postgres itu command nya:
```
> \c <database_name>
```

**Note :** misal abis masuk ke database polldb `\c polldb` nah mau balik ke postgres itu tinggal `\c postgres`

6. Bikin table di setup.js
```js
//your code here

const client = require('./config/config.js');

const queryCreateTablePoliticians = `
  DROP TABLE IF EXISTS "Politicians" CASCADE;
  CREATE TABLE IF NOT EXISTS "Politicians"(
    id serial primary key,
    name varchar(50),
    party varchar(10),
    location varchar(10),
    grade_current float
  );
`

const queryCreateTableVoters = `
  DROP TABLE IF EXISTS "Voters" CASCADE;
  CREATE TABLE IF NOT EXISTS "Voters"(
    id serial primary key,
    first_name varchar(50),
    last_name varchar(50),
    gender varchar(10),
    age integer
  );
`

const queryCreateTableVotes = `
  DROP TABLE IF EXISTS "Votes";
  CREATE TABLE IF NOT EXISTS "Votes"(
    id serial primary key,
    politician_id integer,
    constraint fk_politician_id
      foreign key(politician_id)
      references "Politicians"(id)
      on delete cascade
      on update cascade,
    voter_id integer,
    constraint fk_voter_id
      foreign key(voter_id)
      references "Voters"(id)
      on delete cascade
      on update cascade
  );
`

client.query(queryCreateTablePoliticians, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
    console.log('Table Politicians added successfully');
    client.query(queryCreateTableVoters, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        console.log('Table Voters added successfully');
        client.query(queryCreateTableVotes, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            console.log('Table Votes added successfully');
            
            client.end();
          }
        })
      }
    })
  }
})
```

7. Masukin data dari csv (contoh) ke table. di seed-data.js
```js
const fs = require('fs');
const client = require('./config/config.js');

const dataPoliticians = fs.readFileSync('./politicians.csv', 'utf8').split('\r\n');
const dataVoters = fs.readFileSync('./voters.csv', 'utf8').split('\r\n');
const dataVotes = fs.readFileSync('./votes.csv', 'utf8').split('\r\n');

let queryInsertPoliticians = `
  INSERT INTO "Politicians" (name, party, location, grade_current)
  values 
`
let queryInsertVoters = `
  INSERT INTO "Voters" (first_name, last_name, gender, age)
  values 
`
let queryInsertVotes = `
  INSERT INTO "Votes" (politician_id, voter_id)
  values 
`

for (let i = 1; i < dataPoliticians.length - 1; i++) {
  let splitEl = dataPoliticians[i].split(',');
  let name = splitEl[0];
  let party = splitEl[1];
  let location = splitEl[2];
  let grade_current = splitEl[3];

  let strQuery = `('${name}', '${party}', '${location}', ${grade_current})`

  if (i < dataPoliticians.length - 2) {
    strQuery += ','
  } else {
    strQuery += ';'
  }

  queryInsertPoliticians += strQuery;
}


for (let i = 1; i < dataVoters.length - 1; i++) {
  let splitEl = dataVoters[i].split(',');
  let first_name = splitEl[0];
  let last_name = splitEl[1];
  let gender = splitEl[2];
  let age = splitEl[3];

  let strQuery = `('${first_name}', '${last_name}', '${gender}', ${age})`

  if (i < dataVoters.length - 2) {
    strQuery += ','
  } else {
    strQuery += ';'
  }

  queryInsertVoters += strQuery;
}

for (let i = 1; i < dataVotes.length - 1; i++) {
  let splitEl = dataVotes[i].split(',');
  let politician_id = splitEl[1];
  let voter_id = splitEl[0];

  let strQuery = `('${politician_id}', '${voter_id}')`

  if (i < dataVotes.length - 2) {
    strQuery += ','
  } else {
    strQuery += ';'
  }

  queryInsertVotes += strQuery;
}

client.query(queryInsertPoliticians, (err, result) => {
  if (err) {
    console.log('Failed insert data to table Politicians', err);
  } else {
    console.log(result);
    console.log('Success insert data to table Politicians');

    client.query(queryInsertVoters, (err, result) => {
      if (err) {
        console.log('Failed insert data to table Voters', err);
      } else {
        console.log(result);
        console.log('Success insert data to table Voters');

        client.query(queryInsertVotes, (err, result) => {
          if (err) {
            console.log('Failed insert data to table Votes', err);
          } else {
            console.log(result);
            console.log('Success insert data to table Votes');
            
            client.end();
          }
        })
      }
    })
  }
})
```

**Notes:**
- Kalau mau testing-tesing pas lg create table & insert table, janlup buat selalu `node setup.js` dulu baru `node seed-data.js`
```js
DROP TABLE IF EXISTS "Politicians" CASCADE;
CREATE TABLE IF NOT EXISTS "Politicians" ()
```
DAN DI setup.js HARUS ADA DUA QUERY ITU!!!!

8. Cek apakah data dan table udah bener kebentuknya di psql
```
> \c polldb ---> connect ke database namanya polldb (contoh)
> \dt ---> list table
> \d "Politicians" ---> masuk ke table. ini pake "" karena dia capital di awal. kalo kecil semua gausah
> select * form "Politicians" ---> buat check apakah isinya udah bener di table politicians?
```
