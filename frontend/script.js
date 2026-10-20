// ==========================================
// 🌾 FARM2MARKET - JAVASCRIPT
// ==========================================

// ==========================================
// 🔗 BACKEND API URL
// ==========================================

const API_BASE_URL = "http://localhost:3000/api";


// ==========================================
// 🌐 LANGUAGE TRANSLATIONS
// ==========================================

const translations = {

    en: {
        onboarding: "👨‍🌾 Farmer Onboarding",
        marketplace: "🛒 Marketplace",
        markets: "📍 Nearby Markets",
        price: "💰 Price Dashboard",
        weather: "🌦️ Weather & Farming Alert",
        demand: "📊 Demand Forecast",
        logistics: "🚚 Smart Logistics",
        payments: "💳 Digital Payments",
        advisory: "📢 Advisory & Alerts",
        trust: "🔐 Trust & Transparency",
        ai: "🤖 Farm2Market AI Assistant",

        register: "Register",
        listProduce: "🌾 List My Produce",
        transport: "🚚 Book Transport",
        storage: "❄️ Cold Storage",
        upi: "📱 Pay via UPI",
        advance: "💰 Advance Booking"
    },

    kn: {
        onboarding: "👨‍🌾 ರೈತರ ನೋಂದಣಿ",
        marketplace: "🛒 ಮಾರುಕಟ್ಟೆ",
        markets: "📍 ಹತ್ತಿರದ ಮಾರುಕಟ್ಟೆಗಳು",
        price: "💰 ಬೆಲೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        weather: "🌦️ ಹವಾಮಾನ ಮತ್ತು ಕೃಷಿ ಎಚ್ಚರಿಕೆ",
        demand: "📊 ಬೇಡಿಕೆ ಮುನ್ಸೂಚನೆ",
        logistics: "🚚 ಸ್ಮಾರ್ಟ್ ಸಾರಿಗೆ",
        payments: "💳 ಡಿಜಿಟಲ್ ಪಾವತಿ",
        advisory: "📢 ಸಲಹೆಗಳು ಮತ್ತು ಎಚ್ಚರಿಕೆಗಳು",
        trust: "🔐 ನಂಬಿಕೆ ಮತ್ತು ಪಾರದರ್ಶಕತೆ",
        ai: "🤖 Farm2Market AI ಸಹಾಯಕ",

        register: "ನೋಂದಣಿ",
        listProduce: "🌾 ಬೆಳೆ ಪಟ್ಟಿ ಮಾಡಿ",
        transport: "🚚 ಸಾರಿಗೆ ಬುಕ್ ಮಾಡಿ",
        storage: "❄️ ಶೀತಲ ಸಂಗ್ರಹಣೆ",
        upi: "📱 UPI ಮೂಲಕ ಪಾವತಿಸಿ",
        advance: "💰 ಮುಂಗಡ ಬುಕ್ಕಿಂಗ್"
    },

    hi: {
        onboarding: "👨‍🌾 किसान पंजीकरण",
        marketplace: "🛒 बाज़ार",
        markets: "📍 नज़दीकी बाज़ार",
        price: "💰 मूल्य डैशबोर्ड",
        weather: "🌦️ मौसम और कृषि चेतावनी",
        demand: "📊 मांग पूर्वानुमान",
        logistics: "🚚 स्मार्ट परिवहन",
        payments: "💳 डिजिटल भुगतान",
        advisory: "📢 सलाह और चेतावनी",
        trust: "🔐 विश्वास और पारदर्शिता",
        ai: "🤖 Farm2Market AI सहायक",

        register: "पंजीकरण",
        listProduce: "🌾 फसल सूचीबद्ध करें",
        transport: "🚚 परिवहन बुक करें",
        storage: "❄️ कोल्ड स्टोरेज",
        upi: "📱 UPI से भुगतान करें",
        advance: "💰 अग्रिम बुकिंग"
    },

    te: {
        onboarding: "👨‍🌾 రైతు నమోదు",
        marketplace: "🛒 మార్కెట్",
        markets: "📍 సమీప మార్కెట్లు",
        price: "💰 ధర డాష్‌బోర్డ్",
        weather: "🌦️ వాతావరణం మరియు వ్యవసాయ హెచ్చరిక",
        demand: "📊 డిమాండ్ అంచనా",
        logistics: "🚚 స్మార్ట్ రవాణా",
        payments: "💳 డిజిటల్ చెల్లింపులు",
        advisory: "📢 సలహాలు మరియు హెచ్చరికలు",
        trust: "🔐 నమ్మకం మరియు పారదర్శకత",
        ai: "🤖 Farm2Market AI సహాయకుడు",

        register: "నమోదు",
        listProduce: "🌾 పంటను జాబితా చేయండి",
        transport: "🚚 రవాణా బుక్ చేయండి",
        storage: "❄️ కోల్డ్ స్టోరేజ్",
        upi: "📱 UPI ద్వారా చెల్లించండి",
        advance: "💰 అడ్వాన్స్ బుకింగ్"
    },

    ta: {
        onboarding: "👨‍🌾 விவசாயி பதிவு",
        marketplace: "🛒 சந்தை",
        markets: "📍 அருகிலுள்ள சந்தைகள்",
        price: "💰 விலை டாஷ்போர்டு",
        weather: "🌦️ வானிலை மற்றும் விவசாய எச்சரிக்கை",
        demand: "📊 தேவை முன்னறிவிப்பு",
        logistics: "🚚 ஸ்மார்ட் போக்குவரத்து",
        payments: "💳 டிஜிட்டல் பணம்",
        advisory: "📢 ஆலோசனைகள் மற்றும் எச்சரிக்கைகள்",
        trust: "🔐 நம்பிக்கை மற்றும் வெளிப்படைத்தன்மை",
        ai: "🤖 Farm2Market AI உதவியாளர்",

        register: "பதிவு",
        listProduce: "🌾 பயிரை பட்டியலிடுங்கள்",
        transport: "🚚 போக்குவரத்தை பதிவு செய்யுங்கள்",
        storage: "❄️ குளிர்சாதன சேமிப்பு",
        upi: "📱 UPI மூலம் பணம் செலுத்துங்கள்",
        advance: "💰 முன்பதிவு"
    },

    ml: {
        onboarding: "👨‍🌾 കർഷക രജിസ്ട്രേഷൻ",
        marketplace: "🛒 മാർക്കറ്റ്",
        markets: "📍 സമീപത്തുള്ള മാർക്കറ്റുകൾ",
        price: "💰 വില ഡാഷ്ബോർഡ്",
        weather: "🌦️ കാലാവസ്ഥയും കാർഷിക മുന്നറിയിപ്പും",
        demand: "📊 ഡിമാൻഡ് പ്രവചനം",
        logistics: "🚚 സ്മാർട്ട് ഗതാഗതം",
        payments: "💳 ഡിജിറ്റൽ പേയ്മെന്റ്",
        advisory: "📢 ഉപദേശങ്ങളും മുന്നറിയിപ്പുകളും",
        trust: "🔐 വിശ്വാസവും സുതാര്യതയും",
        ai: "🤖 Farm2Market AI സഹായി",

        register: "രജിസ്റ്റർ ചെയ്യുക",
        listProduce: "🌾 വിള ലിസ്റ്റ് ചെയ്യുക",
        transport: "🚚 ഗതാഗതം ബുക്ക് ചെയ്യുക",
        storage: "❄️ കോൾഡ് സ്റ്റോറേജ്",
        upi: "📱 UPI വഴി പണമടയ്ക്കുക",
        advance: "💰 അഡ്വാൻസ് ബുക്കിംഗ്"
    }
};


// ==========================================
// 🌐 CHANGE LANGUAGE
// ==========================================

function changeLanguage() {

    const languageElement = document.getElementById("language");

    if (!languageElement) {
        return;
    }

    const language = languageElement.value;
    const t = translations[language];

    if (!t) {
        return;
    }

    setText("welcomeTitle", language === "en"
        ? "Welcome to Farm2Market 👨‍🌾"
        : language === "kn"
            ? "Farm2Market ಗೆ ಸ್ವಾಗತ 👨‍🌾"
            : language === "hi"
                ? "Farm2Market में आपका स्वागत है 👨‍🌾"
                : language === "te"
                    ? "Farm2Market కు స్వాగతం 👨‍🌾"
                    : language === "ta"
                        ? "Farm2Market க்கு வரவேற்கிறோம் 👨‍🌾"
                        : "Farm2Market ലേക്ക് സ്വാഗതം 👨‍🌾"
    );

    setText("onboardingTitle", t.onboarding);
    setText("marketplaceTitle", t.marketplace);
    setText("marketsTitle", t.markets);
    setText("priceTitle", t.price);
    setText("weatherTitle", t.weather);
    setText("demandTitle", t.demand);
    setText("logisticsTitle", t.logistics);
    setText("paymentsTitle", t.payments);
    setText("advisoryTitle", t.advisory);
    setText("trustTitle", t.trust);
    setText("aiTitle", t.ai);

    setText("registerBtn", t.register);
    setText("listBtn", t.listProduce);
    setText("transportBtn", t.transport);
    setText("storageBtn", t.storage);
    setText("upiBtn", t.upi);
    setText("advanceBtn", t.advance);

    console.log("✅ Language changed to:", language);
}


// ==========================================
// HELPER FUNCTION
// ==========================================

function setText(id, text) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }
}


// ==========================================
// 👨‍🌾 FARMER REGISTRATION
// ==========================================

async function registerFarmer() {

    const aadhaarElement = document.getElementById("aadhaar");
    const nameElement = document.getElementById("name");
    const message = document.getElementById("registrationMessage");

    const aadhaar = aadhaarElement.value.trim();
    const name = nameElement.value.trim();

    if (aadhaar === "" || name === "") {

        message.textContent =
            "❌ Please enter your name and Aadhaar / phone number.";

        message.style.color = "red";

        return;
    }

    try {

        const response = await fetch(`${API_BASE_URL}/farmer`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                aadhaar: aadhaar
            })
        });


        if (!response.ok) {
            throw new Error("Registration failed");
        }


        const data = await response.json();


        message.textContent =
            "✅ Registration successful! Welcome, " +
            data.name +
            "!";

        message.style.color = "green";


        localStorage.setItem(
            "farmerName",
            data.name
        );

        localStorage.setItem(
            "farmerNumber",
            data.aadhaar
        );

    }

    catch (error) {

        console.error("Registration error:", error);

        message.textContent =
            "⚠️ Server error. Could not register farmer.";

        message.style.color = "red";
    }
}


// ==========================================
// 🌾 LIST PRODUCE
// ==========================================

async function listProduce() {

    const crop = document.getElementById("crop").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;
    const marketplace = document.getElementById("marketplace");


    if (quantity === "" || price === "") {

        marketplace.innerHTML = `
            <div class="produce-item">
                ❌ Please enter quantity and expected price.
            </div>
        `;

        return;
    }


    try {

        const response = await fetch(
            `${API_BASE_URL}/produce`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    farmer_id: 1,
                    crop_name: crop,
                    quantity: quantity,
                    price: price
                })
            }
        );


        if (!response.ok) {
            throw new Error("Could not list produce");
        }


        const data = await response.json();


        marketplace.innerHTML = `
            <div class="produce-item">

                <strong>🌾 Your Produce</strong>

                <p>
                    Crop:
                    <strong>${data.crop_name}</strong>
                </p>

                <p>
                    Quantity:
                    <strong>${data.quantity} kg</strong>
                </p>

                <p>
                    Expected Price:
                    <strong>₹${data.price}/kg</strong>
                </p>

                <p>
                    🟢 Status: Available for Buyers
                </p>

            </div>
        `;

    }

    catch (error) {

        console.error("Produce error:", error);

        marketplace.innerHTML = `
            <div class="produce-item">
                ⚠️ Server error. Could not list produce.
            </div>
        `;
    }
}


// ==========================================
// 📍 VIEW MARKET
// ==========================================

function viewMarket(marketName) {

    let message = "";


    if (marketName === "Bengaluru APMC") {

        message =
            "📍 Bengaluru APMC\n\n" +
            "📏 Distance: 12 km\n" +
            "🌾 Vegetables & grains\n" +
            "💰 Competitive prices\n" +
            "👥 Multiple buyers available";
    }


    else if (marketName === "Yeshwanthpur Market") {

        message =
            "📍 Yeshwanthpur Market\n\n" +
            "📏 Distance: 18 km\n" +
            "🌾 Large vegetable market\n" +
            "💰 Daily market prices\n" +
            "🚚 Transport available";
    }


    else if (marketName === "KR Market") {

        message =
            "📍 KR Market\n\n" +
            "📏 Distance: 22 km\n" +
            "🍅 Fruits & vegetables\n" +
            "💰 Multiple buyers\n" +
            "🚚 Transportation available";
    }


    alert(message);
}


// ==========================================
// 🌧️ WEATHER VOICE ALERT
// ==========================================

function readAlert() {

    const message =
        "Weather alert. Rain is expected tomorrow. Consider harvesting ripe crops today.";


    if ("speechSynthesis" in window) {

        const speech =
            new SpeechSynthesisUtterance(message);

        speech.lang = "en-IN";

        window.speechSynthesis.speak(speech);

    }

    else {

        alert(message);
    }
}


// ==========================================
// 🚚 BOOK TRANSPORT
// ==========================================

async function bookTransport() {

    try {

        const response = await fetch(
            `${API_BASE_URL}/book`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    name:
                        localStorage.getItem("farmerName") ||
                        "Guest",

                    phone:
                        localStorage.getItem("farmerNumber") ||
                        "0000000000",

                    email:
                        "guest@example.com",

                    destination:
                        "Bengaluru",

                    date:
                        new Date()
                            .toISOString()
                            .split("T")[0],

                    enterPoint:
                        "Farm",

                    pickupPoint:
                        "Village",

                    paymentMode:
                        "Cash"
                })
            }
        );


        if (!response.ok) {
            throw new Error("Transport booking failed");
        }


        const data = await response.json();


        alert(
            "🚚 " +
            (data.message ||
            "Transport booked successfully!")
        );

    }

    catch (error) {

        console.error(
            "Transport error:",
            error
        );

        alert(
            "⚠️ Server error. Could not book transport."
        );
    }
}


// ==========================================
// ❄️ COLD STORAGE
// ==========================================

function bookStorage() {

    alert(
        "❄️ Cold Storage\n\n" +
        "Your cold storage reservation request has been created!"
    );
}


// ==========================================
// 📱 UPI PAYMENT
// ==========================================

function upiPayment() {

    alert(
        "📱 UPI Payment\n\n" +
        "UPI payment integration can be connected here."
    );
}


// ==========================================
// 💰 ADVANCE PAYMENT
// ==========================================

function advancePayment() {

    alert(
        "💰 Advance Booking\n\n" +
        "Your advance booking request has been created!"
    );
}


// ==========================================
// 🤖 AI ASSISTANT
// ==========================================

function aiAssistant() {

    const question = prompt(
        "🤖 Farm2Market AI Assistant\n\n" +
        "Ask your farming question:"
    );


    if (!question) {
        return;
    }


    const lowerQuestion =
        question.toLowerCase();


    let answer = "";


    if (lowerQuestion.includes("rain")) {

        answer =
            "🌧️ Rain is expected. Protect your crops and harvest ripe crops.";

    }

    else if (lowerQuestion.includes("tomato")) {

        answer =
            "🍅 Tomatoes are currently showing high demand.";

    }

    else if (lowerQuestion.includes("price")) {

        answer =
            "💰 Check the Price Dashboard before selling your crops.";

    }

    else if (
        lowerQuestion.includes("transport") ||
        lowerQuestion.includes("vehicle")
    ) {

        answer =
            "🚚 You can use Smart Logistics to book transport.";

    }

    else if (
        lowerQuestion.includes("market") ||
        lowerQuestion.includes("sell")
    ) {

        answer =
            "🛒 List your produce in the Marketplace and check nearby markets.";

    }

    else {

        answer =
            "🌾 Check the Price Dashboard, Weather Alert and Demand Forecast for useful information.";
    }


    alert(answer);
}


// ==========================================
// 📱 BOTTOM NAVIGATION
// ==========================================

function scrollToSection(id) {

    const element =
        document.getElementById(id);


    if (element) {

        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


// ==========================================
// 👋 LOAD SAVED FARMER
// ==========================================

window.addEventListener("load", function () {

    const savedName =
        localStorage.getItem("farmerName");


    if (savedName) {

        const message =
            document.getElementById(
                "registrationMessage"
            );


        if (message) {

            message.textContent =
                "👋 Welcome back, " +
                savedName +
                "!";

            message.style.color = "green";
        }
    }

});