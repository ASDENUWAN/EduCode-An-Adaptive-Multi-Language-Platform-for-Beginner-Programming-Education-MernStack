// api/routes/course.routes.js
import express from 'express';
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  getCoursesByLanguage, // Import the new function
} from '../controllers/course.controller.js';

const router = express.Router();

// Create a new course
router.post('/', createCourse);

// Get all courses
router.get('/', getAllCourses);

// Get a course by ID
router.get('/:id', getCourseById);

// Get courses by language
router.get('/language/:language', getCoursesByLanguage); // New route for language-based retrieval

// Update a course by ID
router.put('/:id', updateCourse);

// Delete a course by ID
router.delete('/:id', deleteCourse);

export default router;
