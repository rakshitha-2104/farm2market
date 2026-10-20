const express = require('express');
const db = require('./db');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const farmersFile = path.join(__dirname, 'data', 'farmers.json');
const cropsFile = path.join(__dirname, 'data', 'crops.json');
const bookingsFile = path.join(__dirname, 'data', 'bookings.json');

// Helper to save JSON
function saveData(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Register farmer
router.post('/farmer', (req, res) => {
  const { name, aadhaar } = req.body;
  db.run(`INSERT INTO farmers (name, aadhaar) VALUES (?, ?)`, [name, aadhaar], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    const farmer = { id: this.lastID, name, aadhaar };

    let farmers = [];
    if (fs.existsSync(farmersFile)) farmers = JSON.parse(fs.readFileSync(farmersFile));
    farmers.push(farmer);
    saveData(farmersFile, farmers);

    res.json(farmer);
  });
});

// List produce
router.post('/produce', (req, res) => {
  const { farmer_id, crop_name, quantity, price } = req.body;
  db.run(`INSERT INTO crops (farmer_id, crop_name, quantity, price) VALUES (?, ?, ?, ?)`,
    [farmer_id, crop_name, quantity, price], function(err) {
      if (err) return res.status(500).json({ error: err.message });
      const crop = { id: this.lastID, farmer_id, crop_name, quantity, price };

      let crops = [];
      if (fs.existsSync(cropsFile)) crops = JSON.parse(fs.readFileSync(cropsFile));
      crops.push(crop);
      saveData(cropsFile, crops);

      res.json(crop);
    });
});

// Get all crops
router.get('/crops', (req, res) => {
  db.all(`SELECT * FROM crops`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Book travel
router.post('/book', (req, res) => {
  const { name, phone, email, destination, date, enterPoint, pickupPoint, paymentMode } = req.body;
  db.run(`INSERT INTO bookings (name, phone, email, destination, date, enterPoint, pickupPoint, paymentMode)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [name, phone, email, destination, date, enterPoint, pickupPoint, paymentMode], function(err) {
      if (err) return res.status(500).json({ error: err.message });
      const booking = { id: this.lastID, name, phone, email, destination, date, enterPoint, pickupPoint, paymentMode };

      let bookings = [];
      if (fs.existsSync(bookingsFile)) bookings = JSON.parse(fs.readFileSync(bookingsFile));
      bookings.push(booking);
      saveData(bookingsFile, bookings);

      res.json({ message: `✅ Ticket booked for ${name} to ${destination} on ${date}. Pickup: ${pickupPoint}, Payment: ${paymentMode}` });
    });
});

// Cancel travel
router.post('/cancel', (req, res) => {
  const { id } = req.body;
  res.json({ message: `❌ Ticket with ID ${id} has been cancelled successfully.` });
});

module.exports = router;
