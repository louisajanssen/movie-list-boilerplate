let mysql = require('mysql');

let connection = mysql.createConnection({
    user: 'student',
    password: 'student',
    database: 'movies'
})

connection.connect((err) => {
    if(err) {
      console.log(err)
    } else {
      console.log('Connected to MySql :)')
    }
  });
  
  module.exports = connection