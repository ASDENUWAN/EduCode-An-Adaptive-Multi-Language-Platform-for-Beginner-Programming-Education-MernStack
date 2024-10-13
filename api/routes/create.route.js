import express from 'express';
import { Create, getAllNotes, getNoteById, updateNote, deleteNote, getNotes } from '../controllers/create.controller.js';
import { verifyToken } from '../utils/verifyUser.js'; // Import the authentication middleware

const router = express.Router();

// Route to create a new note
router.post('/createNote',verifyToken, Create);

// Route to fetch a new note
router.get('/mynotes', getAllNotes);

// Route to fetch a single note by ID
router.get('/note/:id', getNoteById);

// Route to update a note
router.put('/note/:id', updateNote);

// Route to delete a note
router.delete('/note/:id', deleteNote);

router.get('/notes', verifyToken, getNotes);

export default router;