// controllers/feedbackController.js
import Feedback from '../models/feedback.js';

// Add a new feedback
export const addFeedback = async (req, res) => {
  try {
    const { name, email, descrp } = req.body;
    const newFeedback = new Feedback({ name, email, descrp });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};

// Get all feedback
export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve feedbacks' });
  }
};
