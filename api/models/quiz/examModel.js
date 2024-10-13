import mongoose from "mongoose";

const examSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    totalMarks: {
      type: String,
      required: true,
    },
    passingMarks: {
      type: String,
      required: true,
    },
    questions: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "questions",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Exam = mongoose.model("exams", examSchema);

export default Exam;
