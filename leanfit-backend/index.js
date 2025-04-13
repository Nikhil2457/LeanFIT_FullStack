const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/generate-schedule', async (req, res) => {
  const { prompt, userId } = req.body;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt  // Make sure `prompt` is a simple string
              }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const schedule = response.data.candidates[0].content;

    // Save to Firestore
    const admin = require('firebase-admin');
    const serviceAccount = require('./serviceAccountKey.json');
    if (!admin.apps.length) {
      admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    }

    const db = admin.firestore();
    await db.collection("schedules").doc(userId).set({ schedule });

    res.json({ schedule });
  } catch (err) {
    console.error('LLM Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch from LLM' });
  }
});



app.listen(5000, () => console.log('✅ Server running at http://localhost:5000'));
