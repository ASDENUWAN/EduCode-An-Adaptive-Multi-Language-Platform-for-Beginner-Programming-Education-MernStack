// controllers/note.controller.js
import Note from "../models/note.model.js";
import { errorHandler } from "../utils/error.js";

export const getNotes = async (req, res) => {
    try {
      const notes = await Note.find({ user: req.user.id }); // Filter by user ID
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve notes' });
    }
  };

// Controller to create a new note
export const Create = async (req, res, next) => {
    const { Course, Date, Title, Language, Content, Important } = req.body;
    const newNote = new Note({ Course, Date, Title, Language, Content, Important, user: req.user.id  });
    
    try {
        await newNote.save();
        res.status(201).json({ message: 'Note created successfully' });
    } catch (error) {
        next(errorHandler(500, "Something went wrong!"));
    }
};

// Controller to fetch all notes
export const getAllNotes = async (req, res, next) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        next(errorHandler(500, "Failed to fetch notes"));
    }
};

// Controller to fetch a single note by ID
export const getNoteById = async (req, res, next) => {
    const { id } = req.params;
    
    try {
        const note = await Note.findById(id);
        if (!note) return next(errorHandler(404, "Note not found"));
        res.status(200).json(note);
    } catch (error) {
        next(errorHandler(500, "Failed to fetch note"));
    }
};

// Controller to update a note
export const updateNote = async (req, res, next) => {
    const { id } = req.params;
    const { Course, Title, Language, Content, Important } = req.body; // Extract all fields except Date
  
    try {
      const updatedNote = await Note.findByIdAndUpdate(
        id,
        { Course, Title, Language, Content, Important }, // Update these fields
        { new: true } // Return the updated document
      );
      if (!updatedNote) return next(errorHandler(404, "Note not found"));
      res.status(200).json(updatedNote);
    } catch (error) {
      next(errorHandler(500, "Failed to update note"));
    }
};
  

// Controller to delete a note
export const deleteNote = async (req, res, next) => {
    const { id } = req.params;
    
    try {
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) return next(errorHandler(404, "Note not found"));
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        next(errorHandler(500, "Failed to delete note"));
    }
};