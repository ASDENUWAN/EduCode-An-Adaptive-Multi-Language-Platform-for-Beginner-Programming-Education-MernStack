import Contact from '../models/contact.js';

// Add new contact message to the database
export const addMessage = async (req, res) => {
  const { name, email, message } = req.body;

  // Ensure all fields are filled
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving message' });
  }
};

// Get all contact messages from the database
export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving messages' });
  }
};
