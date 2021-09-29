const Record = require("../models/Record");

const getAllRecords = async (req, res) => {
  const id = req.user._id;
  const Records = await Record.find({ _id: id });
  res.status(200).json(Records);
};

const getRecord = async (req, res) => {
  const RecordId = req.params.id;
  const RecordName = req.body.name;
  const Record = await findOrCreateRecord(RecordId, RecordName);
  res.status(200).json(Record);
};

const createRecord = async (req, res) => {
  const data = req.body;
  await Record.create(data)
    .then((record) => res.json(record))
    .catch((error) => {
      console.log(error._message);
      res.status(404).json(error._message);
    });
};

const updateRecord = async (req, res) => {
  const RecordId = req.body.id;
  const data = req.body.data;
  await Record.findByIdAndUpdate(RecordId, { data });
  res.send("ok");
};

const deleteRecord = async (req, res) => {
  const RecordId = req.body.id;
  await Record.findByIdAndDelete(RecordId);
  res.send("ok");
};

const findOrCreateRecord = async (id, name) => {
  if (id == null) return;

  const Record = await Record.findById(id);
  if (Record) return Record;
  return await Record.create({ _id: id, name: name, data: defaultValue });
};

module.exports = {
  getAllRecords,
  getRecord,
  createRecord,
  updateRecord,
  deleteRecord,
};
