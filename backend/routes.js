const express = require("express");
const db = require("./db");

const router = express.Router();


// ==========================================
// 👨‍🌾 REGISTER FARMER
// ==========================================

router.post("/farmer", (req, res) => {

    const { name, aadhaar } = req.body;

    if (!name || !aadhaar) {
        return res.status(400).json({
            error: "Name and Aadhaar/phone are required"
        });
    }

    const sql = `
        INSERT INTO farmers (name, aadhaar)
        VALUES (?, ?)
    `;

    db.run(sql, [name, aadhaar], function (err) {

        if (err) {
            console.error("Farmer registration error:", err);

            return res.status(500).json({
                error: err.message
            });
        }

        res.json({
            id: this.lastID,
            name: name,
            aadhaar: aadhaar
        });
    });
});


// ==========================================
// 🌾 LIST PRODUCE
// ==========================================

router.post("/produce", (req, res) => {

    const {
        farmer_id,
        crop_name,
        quantity,
        price
    } = req.body;

    if (!farmer_id || !crop_name || !quantity || !price) {

        return res.status(400).json({
            error: "All produce details are required"
        });
    }

    const sql = `
        INSERT INTO crops
        (farmer_id, crop_name, quantity, price)
        VALUES (?, ?, ?, ?)
    `;

    db.run(
        sql,
        [
            farmer_id,
            crop_name,
            quantity,
            price
        ],
        function (err) {

            if (err) {

                console.error(
                    "Produce error:",
                    err
                );

                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({

                id: this.lastID,

                farmer_id: farmer_id,

                crop_name: crop_name,

                quantity: quantity,

                price: price

            });

        }
    );
});


// ==========================================
// 🌾 GET ALL CROPS
// ==========================================

router.get("/crops", (req, res) => {

    db.all(
        "SELECT * FROM crops",
        [],
        (err, rows) => {

            if (err) {

                return res.status(500).json({
                    error: err.message
                });

            }

            res.json(rows);
        }
    );

});


// ==========================================
// 🚚 BOOK TRANSPORT
// ==========================================

router.post("/book", (req, res) => {

    console.log("Transport booking received:");

    console.log(req.body);

    res.json({

        message:
            "Transport booked successfully! 🚚"

    });

});


module.exports = router;