// api/openai.js
import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

const API_BASE_URL = 'https://api.openai.com/v1/engines/davinci/completions';

export const getArtistInfo = (artistName) => {
  return axios.post(API_BASE_URL, {
    prompt: `Speak the same language to provide an engaging overview of ${artistName} in life .`,
    max_tokens: 100,
  }, {
    headers: {
      'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.data.choices[0].text.trim())
    .catch(error => {
      throw new Error(error.message);
    });
};
