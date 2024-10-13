import mongoose from "mongoose";

const examReportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "exams",
    },
    result: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const reportExam = mongoose.model("examreports", examReportSchema);

export default reportExam;
