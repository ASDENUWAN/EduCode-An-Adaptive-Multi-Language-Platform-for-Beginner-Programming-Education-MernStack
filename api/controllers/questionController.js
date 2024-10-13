import Question from '../models/Question.js';
import mongoose from 'mongoose';


// Create a new question
export const createQuestion = async (req, res) => {
  try {
    const { name, description, errorCode, notes, programmingLanguages } = req.body;

    // Validate input data
    if (!name || !description || !programmingLanguages || programmingLanguages.length === 0) {
      return res.status(400).json({ error: 'Invalid input data. Ensure all required fields are filled.' });
    }

    // Create a new Question instance
    const newQuestion = new Question({ name, description, errorCode, notes,user: req.user.id , programmingLanguages });

    // Save the question to the database
    await newQuestion.save();

    // Respond with a success message and the created question
    res.status(201).json({ message: 'Question created successfully', question: newQuestion });
  } catch (error) {
    console.error('Error creating question:', error);

    // Check if the error is related to validation
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation failed', details: error.message });
    }

    // General server error
    res.status(500).json({ error: 'Failed to create question', details: error.message });
  }
};

// Get all questions
export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve questions' });
  }
};

// Get a single question by ID
export const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.status(200).json({ question }); // Wrap the question in an object
  } catch (error) {
    console.error('Error fetching question:', error.message); // Log error
    res.status(500).json({ error: 'Failed to retrieve question' });
  }
};



// Update a question
export const updateQuestion = async (req, res) => {
  try {
    const { name, description, errorCode, notes, programmingLanguages } = req.body;
    const question = await Question.findByIdAndUpdate(req.params.id, { name, description, errorCode, notes, programmingLanguages }, { new: true });
    res.status(200).json({ message: 'Question updated successfully', question });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update question' });
  }
};

// Delete a question
export const deleteQuestion = async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete question' });
  }
};

// Add a comment to a question
export const addComment = async (req, res) => {
  try {
    const { description, code } = req.body;
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    question.comments.push({ description, code });
    await question.save();
    res.status(201).json({ message: 'Comment added successfully', question });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

// Inside questionController.js
export const getQuestionWithComments = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid question ID' });
    }
    const question = await Question.findById(id).populate('comments');
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.status(200).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve question with comments' });
  }
};

export const getUserQuesions = async (req, res) => {
  try {
    const question = await Question.find({ user: req.user.id }); // Filter by user ID
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve questions' });
  }
};