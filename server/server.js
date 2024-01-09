// server.js
import express from 'express';
import cors from 'cors';
import { getTweets } from './api/twitterAPI.js';

const app = express();

// Enable CORS for all routes
app.use(cors());

// Define your API endpoint
app.get('/tweets', async (req, res) => {
  try {
    const query = req.query.query || '#matterport';
    const tweets = await getTweets(query);

    // Log the server response
    console.log('Server Response:', tweets);

    // Set CORS headers
    res.header('Access-Control-Allow-Origin', 'https://react-twitter-gray.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // Send the JSON response
    res.status(200).json(tweets);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
