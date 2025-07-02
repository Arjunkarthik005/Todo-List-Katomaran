// 📦 Import packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

// 🚀 Create app and define port
const app = express();
const PORT = process.env.PORT || 5000;

// 🧩 Use middlewares
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));
