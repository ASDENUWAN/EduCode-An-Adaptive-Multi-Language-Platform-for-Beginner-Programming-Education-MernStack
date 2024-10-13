// routes/routes.js
import express from 'express';
import axios from 'axios';
import { clientId, clientSecret } from '../config.js';

const router = express.Router();

router.post('/runCode', async (req, res) => {
  const { code, language, input } = req.body;

  try {
    const response = await axios.post('https://api.jdoodle.com/v1/execute', {
      script: code,
      language: language === 'python' ? 'python3' : language,
      stdin: input,
      versionIndex: '0',
      clientId,
      clientSecret,
    });
    res.status(201).json(response.data);
  } catch (error) {
    console.error('JDoodle API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Code execution failed', details: error.message });
  }
});

export default router;
