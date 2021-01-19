# 1. Buat folder dan js yang secara pasti dibutuhkan
- **Folder** : models, views, controllers, routes, config
- **Script** : app.js, config.js, setup.js, seeding.js

# 2. Install yang dibutuhkan
```
$ npm init -y
$ npm install express ejs pg
$ touch .gitignore                              (di git bash)
$ echo "node_modules" > .gitignore              (di git bash)
```

# 3. Connection to database
- Buat database di cmd
```
$ psql -U postgres
$ create database <database-name>
```
- Buat script di config/config.js
https://node-postgres.com/features/connecting
```js
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: '<database-name>',
  password: 'Fajri1624',
  port: 5432,
})

module.export = pool;
```

- Buat script setup.js -> bikin table di database
https://www.postgresqltutorial.com/postgresql-drop-table/
https://www.postgresqltutorial.com/postgresql-create-table/
```js
const pool = require('./config/config.js');

const query = `
DROP TABLE IF EXISTS <table_name>; 
CREATE TABLE IF NOT EXISTS <table-name> (
	id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL
);
`

pool.query(query, (err,result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`success create table <table-name>`);
  }
})
```

- Buat script seeding.js -> insert data ke table
https://www.postgresqltutorial.com/postgresql-insert-multiple-rows/
```js
const pool = require('./config/config.js');
const data = require('./shoes.json');

let query = `
INSERT INTO <table-name> (column1, column2, ...)
VALUES
`

for (let i = 0; i < data.length; i++) {
  query += `('${data[i].column1}', '${data[i].column2}', '${data[i].column3}')`;
  
  if (i < data[i].length - 1) {
    query += ','
  } else {
    query += ';'
  }
}

pool.query(query, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`success insert data to table <table-name>`);
  }
})

```

# 4. Mulai dari app.js & routing
- Setting semuanya, mulai dari require express, set view engine, body parser, router, app.listen

https://expressjs.com/en/starter/hello-world.html
https://expressjs.com/en/guide/using-template-engines.html
http://expressjs.com/en/api.html#express.urlencoded

```js
const express = require('express');
const router = require('./routes/index.js');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
```

# 5. Routing
- Di folder routes, double routing.
- index.js : untuk home
- <nama>.js : untuk /<nama>

1. di index.js
```js
const router = require('express').Router();
const Controller = require('../controllers/controller.js');

router.get('/', Controller.getData);
router.get('/<nama>/add', Controller.getAdd);
router.post('/<nama>/add', Controller.postAdd);
router.get('/<nama>/edit/:id', Controller.getEditById);
router.post('/<nama>/edit/:id', Controller.postEditById);
router.get('/<nama>/delete/:id', Controller.getDeleteById);

module.exports = router;
```

# 6. Bikin file Controller
```js
const Model = require('../models/model.js');

class Controller {
  static getData(req, res) {
    Model.readData((err, arr<Name>) => {
      if (err) {
        res.send(err.message);
      } else {
        res.render('index.ejs', { data<Name>: arr<Name> } );
      }
    })
  }
  
  static getAdd(req, res) {
    res.render('addForm.ejs');
  }
  
  static postAdd(req, res) {
    let objNew = req.body;
    Model.addData(objNew, (err) => {
      if (err) {
      	res.send(err);
      } else {
      	res.redirect('/');
      }
    });
    
    // res.redirect('/');
  }
  
  static getEditById(req, res) {
    let id<Name> = +req.params.id;
    Model.findById(id<Name>, (err, found<Name>) => {
      if (err) {
      	res.send(err);
      } else {
      	res.render('editForm.ejs', { edit<Name>: found<Name> });
      }
    })
  }
  
  static postEditById(req, res) {
    let id<Name> = +req.params.id;
    let objEdit = req.body;
    Model.editById(id<Name>, objEdit, (err) => {
      if (err) {
      	res.send(err);
      } else {
      	res.redirect('/');
      }
    })
  }
  
  static getDeleteById(req, res) {
    let id<Name> = +req.params.id;
    Model.deleteById(id<Name>, (err) => {
      if (err) {
      	res.send(err);
      } else {
      	res.redirect('/');
      }
    })
  }
}

module.exports = Controller;
```

# 7. Bikin file ejs di views

index.ejs ---> table data

- terima data array of instance

https://www.w3schools.com/html/html_tables.asp

```js

```

addForm.ejs

```js

```

editForm.ejs
- terima obj
- `<option selected>APAPUN INI</option>`
- `<input type="radio" name="gender" value="female" checked>`

```js

```

# 8. Bikin file model di models

model.js
```
class Model {
  constructor(obj) {
    this.param1 = obj.param1;
    this.param2 = obj.param2;
    // ...
  }
  
  static readData(cb) {
    // cb -> (err, arr<Name>)
  }
  
  static addData(objNew, cb) {
    // cb -> (err)
  }
  
  static findById(id<Name>, cb) {
    // cb -> (err, found<Name>)
  }
  
  static editById(id<Name>, objEdit, cb) {
    // cb -> (err)
  }
  
  static deleteById(id<Name>, cb) {
    // cb -> (err)
  }
}

module.exports = Model;
```

# 9. JANGAN LUPA `module.exports`!!!!!!!

# 10. SEMANGAT!!!!!!!!!
