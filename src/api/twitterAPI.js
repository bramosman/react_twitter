// twitterAPI.js
import axios from 'axios';

const BASE_URL = 'https://react-twitter-gray.vercel.app/tweets';

export const getTweets = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?query=${query}`);
    console.log('Twitter API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching tweets:', error.message);
    // Throw the original error to be caught and handled in MainContainer.js
    throw error;
  }
};
