const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./farm2market.db');

// Create tables if not exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS farmers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    aadhaar TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS crops (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    farmer_id INTEGER,
    crop_name TEXT,
    quantity INTEGER,
    price INTEGER,
    FOREIGN KEY(farmer_id) REFERENCES farmers(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone TEXT,
    email TEXT,
    destination TEXT,
    date TEXT,
    enterPoint TEXT,
    pickupPoint TEXT,
    paymentMode TEXT
  )`);
});

module.exports = db;
