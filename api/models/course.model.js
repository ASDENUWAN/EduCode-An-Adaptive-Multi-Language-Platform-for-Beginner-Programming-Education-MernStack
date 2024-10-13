// api/models/course.model.js
import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    enum: ['C', 'C++', 'Java', 'Python'], // Make sure the options match your pages
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: [
    {
      sectionTitle: {
        type: String,
        required: true,
      },
      sectionContent: {
        type: String,
        required: true,
      },
    },
  ],
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

courseSchema.pre('save', function (next) {
    this.updatedAt = Date.now(); // Set updatedAt to the current date
    next();
  });

// Creating the Course model
const Course = mongoose.model('Course', courseSchema);

export default Course;
