let express = require('express');
let path = require('path');
let db = require('../db')

let PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
let app = express();
let PORT = 3000 || process.env.PORT;

let loggingMiddleware = (req, res, next) => {
  let logStr = `${req.method} request coming in for ${req.url}`
  console.log(logStr)
  next()
}

app.use(loggingMiddleware);
app.use(express.json())
app.use(express.static(PUBLIC_DIR));

app.get('/api/movielist', (req, res) => {
  let sql = 'SELECT * FROM movielist'
  
  db.query(sql, function(err, data ) {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(data);
    }
  })
})

app.post('/api/movielist', (req, res) => {
  let sql = 'INSERT INTO movielist (title) VALUES (?) '
  let { title } = req.body;

  db.query(sql, [title], function(err, data) {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(201);
    }
  })
})

app.put('/api/movielist', (req, res) => {
  let { watched, id } = req.body;
  let sql = 'UPDATE movielist SET watched = ? WHERE id = ?';

  db.query(sql, [watched, id], function(err, data) {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(200);
    }
  })
})

app.delete('/api/movielist', (req, res) => {
  let { id } = req.body;
  let sql = "DELETE FROM movielist WHERE id = ?"

  db.query(sql, [id], function(err, data) {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(200);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})