require('dotenv').config();
const mongoose = require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connectée!");
    } catch (err) {
        console.error("Erreur de connexion à MongoDB:", err.message);
        process.exit(1); 
    }
}

module.exports = connectDb;
