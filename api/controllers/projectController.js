import { Project } from '../models/Project.js';

// Get all projects for the logged-in user
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id }); // Filter by user ID
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve projects' });
  }
};

// Create a new project for the logged-in user
export const createProject = async (req, res) => {
  const { name, code, language } = req.body;
  try {
    const newProject = new Project({ name, code, language, user: req.user.id }); // Assign user ID
    await newProject.save();
    res.status(201).json({ success: true, project: newProject });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create project' });
  }
};




// Get a single project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve project' });
  }
};

// Update a project
export const updateProject = async (req, res) => {
  const { name, code, language } = req.body;
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { name, code, language },
      { new: true }
    );
    if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update project' });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete project' });
  }
};
