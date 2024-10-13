import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const questionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Trims any extra spaces
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  errorCode: {
    type: String,
    required: false,
    trim: true
  },
  notes: {
    type: String,
    required: false,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  programmingLanguages: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return v && v.length > 0; // Ensures at least one programming language is selected
      },
      message: 'At least one programming language must be selected.'
    }
  },
  comments: [commentSchema] // Embedding comment schema for better structure
}, {
  timestamps: true
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
