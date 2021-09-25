const Document = require('../models/Document');

const defaultValue = "";

const getAllDocuments = async (req, res) => {
    const documents = await Document.find();
    res.status(200).json(documents);
}

const getDocument = async (req, res) => {
    const documentId = req.params.id;
    const projectName = req.body.name
    const document = await findOrCreateDocument(documentId, projectName);
    res.status(200).json(document);
}

const updateDocument = async (req, res) => {
    const documentId = req.params.id;
    const data = req.body.data;
    await Document.findByIdAndUpdate(documentId, { data });
    res.send("ok");
}

const findOrCreateDocument = async (id, name) => {
  if (id == null) return;

  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, name: name, data: defaultValue });
};

module.exports = {
    getAllDocuments,
    getDocument,
    updateDocument,
};
