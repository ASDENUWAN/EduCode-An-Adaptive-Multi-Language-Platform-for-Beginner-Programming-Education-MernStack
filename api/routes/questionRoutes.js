import express from 'express';
import {
  createQuestion,
  getAllQuestions,
  getQuestionWithComments, // Updated to include this function
  updateQuestion,
  deleteQuestion,
  addComment,
  getUserQuesions
} from '../controllers/questionController.js';

import { verifyToken } from '../utils/verifyUser.js'; // Import the authentication middleware


const router = express.Router();

// Route to create a new question
router.post('/questions', verifyToken, createQuestion);

// Route to get all questions
router.get('/questions', getAllQuestions);

// Route to get a single question by ID with all its comments
router.get('/questions/:id', getQuestionWithComments); // Updated route

// Route to update a question by ID
router.put('/questions/:id', updateQuestion);

// Route to delete a question by ID
router.delete('/questions/:id', deleteQuestion);

// Route to add a comment to a specific question
router.post('/questions/:id/comments', addComment);

router.get('/uquestions', verifyToken, getUserQuesions);


export default router;
