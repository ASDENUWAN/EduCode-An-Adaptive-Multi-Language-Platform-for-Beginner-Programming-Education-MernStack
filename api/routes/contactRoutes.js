import express from 'express';
import { addMessage, getMessages } from '../controllers/contactController.js';

const router = express.Router();

// POST - Submit a new message
router.post('/contact', addMessage);

// GET - Retrieve all messages
router.get('/contact/messages', getMessages);

export default router;
