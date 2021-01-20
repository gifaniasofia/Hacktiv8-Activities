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

const queryCreateTable = `
DROP TABLE IF EXISTS "students", "teachers", "subjects";

CREATE TABLE IF NOT EXISTS "students" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "gender" VARCHAR NOT NULL,
    "birth_date" DATE NOT NULL
);
`

pool.query(queryCreateTable, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
        console.log(`Success create table`);
    }

    pool.end();
})
```

- Buat script seeding.js -> insert data ke table
https://www.postgresqltutorial.com/postgresql-insert-multiple-rows/
```js
const pool = require('./config/config.js');
const fs = require('fs');

const students = JSON.parse(fs.readFileSync('./data/students.json', 'utf8'));

let queryInsertStudents = `
INSERT INTO "students" ("first_name", "last_name", "email", "gender", "birth_date")
VALUES ` + students.map((student, index) => {
    let values = `('${student.first_name}', '${student.last_name}', '${student.email}', '${student.gender}', '${student.birth_date}')`
    if (index === students.length - 1) {
        values += `;`
    }
    return values;
})

pool.query(queryInsert, (err, result_students) => {
    if (err) {
        console.log(`Error insert data : ${err}`);
    } else {
        console.log(`Success insert data`);
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
const Student = require("../models/modelStudent.js");

class ControllerStudent {
    static getList(req, res) {
        Student.readData((err, arrStudents) => {
            if (err) {
                res.send(err);
            } else {
                res.render('students.ejs', { dataStudents: arrStudents });
            }
        })
    }

    static getAdd(req, res) {
        let errorValidation = req.query.alert;
        res.render('addStudent.ejs', { errorValidation });
    }

    static postAdd(req, res) {
        let inputStudent = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
            birth_date: req.body.birth_date
        }

        Student.addStudent(inputStudent, (err) => {
            if(err) {
                if (Array.isArray(err)) {
                    res.redirect(`/students/add?alert=${err}`);
                } else {
                    res.send(err);
                }
            } else {
                res.redirect('/students');
            }
        })
    }

    static getEditById(req, res) {
        const idStudent = +req.params.id;
        Student.findEditStudentById(idStudent, (err, editStudent) => {
            if (err) {
                res.send(err.message);
            } else {
                res.render('editStudent.ejs', { editStudent: editStudent });
            }
        })
    }

    static postEditById(req, res) {
        const idStudent = +req.params.id;
        let objEdited = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
            birth_date: req.body.birth_date
        }

        Student.editStudentById(idStudent, objEdited, (err) => {
            if (err) {
                res.send(err.message);
            } else {
                res.redirect('/students');
            }
        })
    }

    static deleteById(req, res) {
        const idStudent = +req.params.id;
        Student.deleteStudentById(idStudent, (err) => {
            if (err) {
                res.send(err.message);
            } else {
                res.redirect('/students');
            }
        })
    }

    static getListByEmail(req, res) {
        const emailStudent = req.params.email;
        Student.findStudentByEmail(emailStudent, (err, filteredStudent) => {
            if (err) {
                res.send(err.message);
            } else {
                res.render('students.ejs', { dataStudents: filteredStudent });
            }
        })
    }
}

module.exports = ControllerStudent;
```

# 7. Bikin file ejs di views

index.ejs ---> table data

- terima data array of instance

https://www.w3schools.com/html/html_tables.asp

```js
    <h1>Students Data</h1>
    <h3><a href="/students">Show All Data</a> | <a href="/students/add">Add Student</a></h3>
    <table>
        <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Birthday Date</th>
            <th>Options</th>
        </tr>
        <% dataStudents.forEach(student => { %>
            <tr>
                <td><%= student.id %></td>
                <td><%= student.first_name %></td>
                <td><%= student.last_name %></td>
                <td><a href="/students/<%= student.email %>"><%= student.email %></a></td>
                <td><%= student.gender %></td>
                <td><%= student.birth_date %></td>
                <td><a href="/students/<%= student.id %>/edit">Edit</a> | <a href="/students/<%= student.id %>/delete">Delete</a></td>
            </tr>
        <% }) %>
    </table>
```

addForm.ejs

```js
    <div>
        <form action="/students/add" method="POST">
            <label for="first_name"><b>First Name :</b></label><br/>
            <input type="text" name="first_name">

            <label for="last_name"><b>Last Name :</b></label><br/>
            <input type="text" name="last_name">

            <label for="email"><b>Email :</b></label><br/>
            <input type="text" name="email">

            <label for="gender"><b>Gender:</b></label><br/>
            <input type="radio" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" name="gender" value="female">
            <label for="female">Female</label><br/>

            <label for="birth_date"><b>Birthday :</b></label><br/>
            <input type="date" name="birth_date" value="YYYY-MM-DD">

            <input type="submit" value="Add Student">
        </form>
        <% if (errorValidation) { %>
            <p class="error"><%= errorValidation %></p>
        <% } %>
    </div>
```

editForm.ejs
- terima obj
- `<option selected>APAPUN INI</option>`
- `<input type="radio" name="gender" value="female" checked>`

```js
        <form action="/students/<%= editStudent.id %>/edit" method="POST">
            <label for="first_name"><b>First Name :</b></label><br/>
            <input type="text" name="first_name" value="<%= editStudent.first_name %>">

            <label for="last_name"><b>Last Name :</b></label><br/>
            <input type="text" name="last_name" value="<%= editStudent.last_name %>">

            <label for="email"><b>Email :</b></label><br/>
            <input type="text" name="email" value="<%= editStudent.email %>">

            <label for="gender"><b>Gender:</b></label><br/>
            <% if (editStudent.gender == "male") { %>
                <input type="radio" name="gender" value="male" checked>
                <label for="male">Male</label>
                <input type="radio" name="gender" value="female">
                <label for="female">Female</label><br/>
            <% } else { %>
                <input type="radio" name="gender" value="male">
                <label for="male">Male</label>
                <input type="radio" name="gender" value="female" checked>
                <label for="female">Female</label><br/>
            <% } %>
            
            <label for="birth_date"><b>Birthday :</b></label><br/>
            <input type="date" id="birth_date" name="birth_date" value="<%= editStudent.birth_date %>">

            <input type="submit" value="Edit Student">
        </form>
```

# 8. Bikin file model di models

model.js
```js
const pool = require('../config/config.js');

class Student {
    constructor(obj) {
        this.id = obj.id || null;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.email = obj.email;
        this.gender = obj.gender;
        this.birth_date = obj.birth_date ? Student.convertDate(obj.birth_date) : null;
    }

    static convertDate(d) {
        d = new Date(d);
        return [d.getFullYear(), d.getMonth()+1, d.getDate()]
            .map(el => el < 10 ? `0${el}` : `${el}`).join('-');
    }

    static readData(cb) {
        const query = `SELECT * FROM "students" ORDER BY "id";`
        pool.query(query, (err, result) => {
            if (err) {
                cb(err.message, null);
            } else {
                let data = result.rows;
                let arrStudents = data.map(obj => new Student(obj));
                cb(null, arrStudents);
            }
        })
    }

    static validateAdd(objStudent) {
        const errors = [];
        if (!objStudent.first_name) {
            errors.push(`First name harus diisi`)
        }

        if (!objStudent.last_name) {
            errors.push(`Last name harus diisi`)
        }

        if (!objStudent.email) {
            errors.push(`Email harus diisi`)
        }

        if (!objStudent.gender) {
            errors.push(`Gender harus dipilih`)
        }

        if (!objStudent.birth_date) {
            errors.push(`Birthday date harus diisi`)
        }

        return errors;
    }

    static addStudent(objInputStudent, cb) {
        const newStudent = new Student(objInputStudent);
        let errorValidation = Student.validateAdd(newStudent);
        if (errorValidation.length === 0) {
            const queryInsertStudent = `
            INSERT INTO "students" ("first_name", "last_name", "email", "gender", "birth_date")
            values ($1, $2, $3, $4, $5);
            `
            const values = [ newStudent.first_name, newStudent.last_name, newStudent.email, newStudent.gender, newStudent.birth_date];
    
            pool.query(queryInsertStudent, values, (err, result) => {
                if (err) {
                    cb(err.message);
                } else {
                    console.log(`Success insert data new student :`, newStudent);
                    cb();
                }
            })
        } else {
            cb(errorValidation);
        }
    }

    static findEditStudentById(idStudent, cb) {
        const query = `SELECT * FROM students WHERE id = $1;`
        const values = [ idStudent ];

        pool.query(query, values, (err, filteredResult) => {
            if (err) {
                cb(err, null);
            } else {
                let objFilteredResult = filteredResult.rows[0];
                let editStudent = new Student(objFilteredResult);
                cb(null, editStudent);
            }
        })
    }

    static editStudentById(idStudent, objEdited, cb) {
        const query = `
        UPDATE students 
        SET first_name = $2, last_name = $3, email = $4, gender = $5, birth_date = $6 
        WHERE id = $1;
        `
        const values = [ idStudent, objEdited.first_name, objEdited.last_name, objEdited.email, objEdited.gender, objEdited.birth_date ];

        pool.query(query, values, (err, result) => {
            if (err) {
                cb(err, null);
            } else {
                console.log(`Success edit data student id : ${idStudent}`);
                cb();
            }
        })
    }

    static deleteStudentById(idStudent, cb) {
        const query = `
        DELETE FROM students
        WHERE id = $1;
        `
        const values = [ idStudent ];

        pool.query(query, values, (err, result) => {
            if (err) {
                cb(err, null);
            } else {
                console.log(`Success delete data student id : ${idStudent}`);
                cb();
            }
        })
    }

    static findStudentByEmail(emailStudent, cb) {
        const query = `SELECT * FROM students WHERE email = $1;`
        const values = [ emailStudent ];

        pool.query(query, values, (err, filteredResult) => {
            if (err) {
                cb(err, null);
            } else {
                let objFilteredResult = filteredResult.rows[0];
                let filteredStudent = [ new Student(objFilteredResult) ];
                cb(null, filteredStudent);
            }
        })
    }
}

module.exports = Student;
```

# 9. JANGAN LUPA `module.exports`!!!!!!!

# 10. SEMANGAT!!!!!!!!!
