const express = require('express');
const compression = require('compression');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join('db', 'sqlite.db');
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)){
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new sqlite3.Database('./db/sqlite.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS reservations (name TEXT, email TEXT, phone TEXT, people INTEGER, date TEXT, time TEXT, message TEXT)');
});

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('dist', ['etag']));

app.post('/reservation', (req, res) => {

  const { name, email, phone, people, date, time, message } = req.body;

  db.run('INSERT INTO reservations (name, email, phone, people, date, time, message) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, email, phone, people, date, time, message]);
  console.log('Reservation request received:', req.body);

  res.send('Reservation request received!');
});

app.listen(3000, () => console.log('Server is running on port 3000'));
