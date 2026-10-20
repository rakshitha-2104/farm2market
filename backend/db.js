const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./farm2market.db", (err) => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
    } else {
        console.log("✅ Connected to Farm2Market database");
    }
});

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS farmers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            aadhaar TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error("❌ Farmers table error:", err.message);
        } else {
            console.log("✅ Farmers table ready");
        }
    });

    db.run(`
        CREATE TABLE IF NOT EXISTS crops (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            farmer_id INTEGER,
            crop_name TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            price INTEGER NOT NULL,
            FOREIGN KEY (farmer_id) REFERENCES farmers(id)
        )
    `, (err) => {
        if (err) {
            console.error("❌ Crops table error:", err.message);
        } else {
            console.log("✅ Crops table ready");
        }
    });

});

module.exports = db;