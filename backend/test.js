const fetch = require('node-fetch');

// Test farmer registration
async function testFarmer() {
  const response = await fetch('http://localhost:3000/api/farmer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: "Ravi", aadhaar: "1234567890" })
  });
  const data = await response.json();
  console.log("Farmer Registered:", data);
}

// Test crop listing
async function testCrop() {
  const response = await fetch('http://localhost:3000/api/produce', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ farmer_id: 1, crop_name: "Tomato", quantity: 100, price: 30 })
  });
  const data = await response.json();
  console.log("Crop Listed:", data);
}

testFarmer().then(() => testCrop());
