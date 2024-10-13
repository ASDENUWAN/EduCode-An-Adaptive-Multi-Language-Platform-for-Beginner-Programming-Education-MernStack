// routes/feedbackRoutes.js
import express from 'express';
import { addFeedback, getAllFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

// Route to add feedback
router.post('/feedback', addFeedback);

// Route to get all feedback
router.get('/feedback', getAllFeedback);

export default router;
