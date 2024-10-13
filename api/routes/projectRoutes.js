import express from 'express';
import {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import { verifyToken } from '../utils/verifyUser.js'; // Import the authentication middleware

const router = express.Router();

// CRUD Routes for projects (authenticated)
router.get('/projects', verifyToken, getProjects);
router.post('/projects', verifyToken, createProject);
router.get('/projects/:id', verifyToken, getProjectById);
router.put('/projects/:id', verifyToken, updateProject);
router.delete('/projects/:id', verifyToken, deleteProject);

export default router;
