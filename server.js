const express = require('express');
const mysql = require('mysql2');
const app = express();
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
  connectionLimit: 10
});
app.get('/blocks/all', (req, res) => {
  pool.query('SELECT * FROM blocks', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      res.json(results);
    }
  });
});
app.get('/block/hash/:hash', (req, res) => {
  const hash = req.params.hash;
  pool.query('SELECT * FROM blocks WHERE hash = ?', [hash], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else if (results.length === 0) {
      res.status(404).send('Block not found');
    } else {
      res.json(results[0]);
    }
  });
});
const port = 9090;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
console.error()