// api/controllers/course.controller.js
import Course from '../models/course.model.js';

// Create a new course
export const createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json({ success: true, course });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all courses
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ success: true, courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a course by ID
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    res.status(200).json({ success: true, course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a course by ID
export const updateCourse = async (req, res) => {
    try {
      // Add updatedAt to the request body
      const updatedData = {
        ...req.body,
        updatedAt: Date.now(), // Set the updatedAt field to the current date
      };
  
      const course = await Course.findByIdAndUpdate(req.params.id, updatedData, {
        new: true,
        runValidators: true,
      });
  
      if (!course) {
        return res.status(404).json({ success: false, message: 'Course not found' });
      }
  
      res.status(200).json({ success: true, course });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  

// Delete a course by ID
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    res.status(200).json({ success: true, message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get courses by language
export const getCoursesByLanguage = async (req, res) => {
    const { language } = req.params;
  
    try {
      const courses = await Course.find({ language });
      res.status(200).json({ success: true, courses });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
