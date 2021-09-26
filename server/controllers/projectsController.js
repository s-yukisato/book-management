const Project = require('../models/Project');

const defaultValue = "";

const getAllProjects = async (req, res) => {
    const id = req.user._id;
    const Projects = await Project.find({_id: id});
    res.status(200).json(Projects);
}

const getProject = async (req, res) => {
    const projectId = req.params.id;
    const projectName = req.body.name
    const Project = await findOrCreateProject(projectId, projectName);
    res.status(200).json(Project);
}

const updateProject = async (req, res) => {
    const projectId = req.params.id;
    const data = req.body.data;
    await Project.findByIdAndUpdate(projectId, { data });
    res.send("ok");
}

const findOrCreateProject = async (id, name) => {
  if (id == null) return;

  const Project = await Project.findById(id);
  if (Project) return Project;
  return await Project.create({ _id: id, name: name, data: defaultValue });
};

module.exports = {
    getAllProjects,
    getProject,
    updateProject,
};
