const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vishray-leads';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ Connection Error:', err));

// Lead Model
const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  businessType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', LeadSchema);

// API Routes
app.post('/api/leads', async (req, res) => {
  try {
    const { name, phone, businessType } = req.body;
    
    if (!name || !phone || !businessType) {
      return res.status(400).json({ error: 'All fields are mandatory' });
    }

    const newLead = new Lead({ name, phone, businessType });
    await newLead.save();

    res.status(201).json({ message: 'Lead captured successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Admin Route (Simple view of leads)
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Vishray Logic Engine running at http://localhost:${PORT}`);
});
