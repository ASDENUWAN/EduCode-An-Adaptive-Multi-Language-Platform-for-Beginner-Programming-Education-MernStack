import { Router } from "express";
import Exam from "../models/quiz/examModel.js";
import { verifyToken } from "../utils/verifyUser.js";
import Question from "../models/quiz/questionModel.js";

const router = Router();

// Add exam
router.post("/add", verifyToken, async (req, res) => {
  try {
    const examExists = await Exam.findOne({ name: req.body.name });
    if (examExists) {
      return res
        .status(200)
        .send({ message: "Exam already exists.", success: false });
    }
    req.body.questions = [];
    const newExam = new Exam(req.body);
    await newExam.save();
    res.send({
      message: "Exam added successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// Get all exams
router.post("/get-all-exams", verifyToken, async (req, res) => {
  try {
    const exams = await Exam.find({});
    res.send({
      message: "All exams fetched successfully",
      success: true,
      data: exams,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// Get exam by id
router.post("/get-exam-by-id", verifyToken, async (req, res) => {
  try {
    const exam = await Exam.findById(req.body.examId).populate("questions");
    res.send({
      message: "Exams fetched successfully",
      success: true,
      data: exam,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// Edit exam by id
router.post("/edit-exam-by-id", verifyToken, async (req, res) => {
  try {
    const exam = await Exam.findByIdAndUpdate(req.body.examId, req.body);
    res.send({
      message: "Exam updated successfully",
      success: true,
      data: exam,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// Delete exam by id
router.post("/delete-exam-by-id", verifyToken, async (req, res) => {
  try {
    const exam = await Exam.findByIdAndDelete(req.body.examId);
    res.send({
      message: "Exam deleted successfully",
      success: true,
      data: exam,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// Add questions to exam
router.post("/add-questions-to-exam", verifyToken, async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    const question = await newQuestion.save();
    // Add questions to exam
    const exam = await Exam.findById(req.body.exam);
    exam.questions.push(question._id);
    await exam.save();
    res.send({
      message: "Questions added successfully",
      success: true,
      data: exam,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// Edit question in exam
router.put("/edit-question-in-exam", verifyToken, async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(
      req.body.questionId, // Make sure the question ID is being passed correctly from the frontend
      {
        name: req.body.name,
        options: req.body.options,
        correctOption: req.body.correctOption,
      },
      { new: true } // Return the updated document
    );

    if (!question) {
      return res.status(404).send({
        message: "Question not found",
        success: false,
      });
    }

    res.send({
      message: "Question updated successfully",
      success: true,
      data: question,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// Delete question from exam
router.post("/delete-question-in-exam", verifyToken, async (req, res) => {
  try {
    // Delete the question from Question collection
    await Question.findByIdAndDelete(req.body.questionId);

    // Remove the question from the exam's question list
    const exam = await Exam.findById(req.body.examId);
    exam.questions = exam.questions.filter(
      (question) => question._id.toString() !== req.body.questionId
    );
    await exam.save();

    res.send({
      message: "Question deleted successfully",
      success: true,
      data: exam,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

export default router;
