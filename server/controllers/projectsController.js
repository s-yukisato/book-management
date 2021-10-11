const Project = require("../models/Project");

const getAllProjects = async (req, res) => {
  const id = req.user._id;
  const projects = await Project.find({ user: id });
  res.status(200).json(projects);
};

const getProject = async (req, res) => {
  const projectId = req.params.id;
  const project = await Project.findById(projectId);
  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: "このページは表示できません" });
  }
};

const createProject = async (req, res) => {
  const userId = req.user._id;
  const project = { ...req.body, user: userId };
  await Project.create(project)
    .then((newProject) => res.json(newProject))
    .catch((error) => {
      console.log(error._message);
      res.status(404).json(error._message);
    });
};

const updateProject = async (req, res) => {
  const projectId = req.params.id;
  const document = req.body;
  await Project.findByIdAndUpdate(projectId, {
    $set: { document: document },
  });
  res.status(200).json({ message: "ok" });
};

const statusChangeProject = async (req, res) => {
  const projectId = req.params.id;
  const status = req.body.status;

  await Project.findByIdAndUpdate(projectId, {
    $set: { status: status },
  });
  res.status(200).json({ message: "ok" });
};

const deleteProject = async (req, res) => {
  const projectId = req.params.id;
  await Project.findByIdAndDelete(projectId);

  res.status(200).json({ messgae: "削除しました" });
};

module.exports = {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  statusChangeProject,
  deleteProject,
};
