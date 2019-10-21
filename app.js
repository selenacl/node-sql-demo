const express = require('express');
const mysql = require('mysql');
const app = express();
const db = mysql.createConnection({
  host: '#',
  user: '#',
  password: '#',
  port: '3306',
  database: 'college_events'
});

// Connect
db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('MySQL connected ...');
});


// Create a database
// app.get('/createdb', (req, res) => {
//   let sql = 'CREATE DATABASE db';
//   db.query(sql, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     res.send('database created');
//   });
// });

//create a table
// app.get('/createUsersTable', (req, res) => {
//   let sql = 'CREATE TABLE users (user_id INT NOT NULL AUTO_INCREMENT, first_name VARCHAR(40) NOT NULL, last_name VARCHAR(40) NOT NULL, PRIMARY KEY (user_id));';
//   db.query(sql, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     res.send('users table created');
//   });
// })

// app.post, add a user
app.get('/adduser', (req, res) => {
  let user = {first_name: "selena", last_name: "c"};
  let sql = 'INSERT INTO users SET ?';

  let query = db.query(sql, user, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('user1 added');
  })
})

// app.patch, update user by id number
app.get('/updateuser/:id', (req, res) => {
  let newFirstName = 'bob';
  let sql = `UPDATE users SET first_name = '${newFirstName}' WHERE user_id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('user1 updated');
  })
})

// app.delete, delete a user by id number
app.get('/deleteuser/:id', (req, res) => {
  let sql = `DELETE FROM users WHERE user_id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('user deleted');
  })
})


// app.get, get all users
app.get('/getusers', (req, res) => {
  let sql = 'SELECT * from users';

  db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send('users fetched');
  })
})


// app.get, get a user by id number
app.get('/getuser/:id', (req, res) => {
  let sql = `SELECT * from users where user_id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('user fetched');
  })
})

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen('3000', () => {
  console.log('Server started on port 3000');
})