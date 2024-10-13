import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    Course : {
        type: String,
        required: true
    },
    Date : {
        type : Date,
        required: true,
        default: Date.now
    },
    Title : {
        type: String,
        required: true
    },
    Language : {
        type: String,
        required: true
    }, 
    Content : {
        type : String,
        required: true
    }, 
    Important : {
        type : String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {timestamps: true});

const Note = mongoose.model('Note', noteSchema);

export default Note;