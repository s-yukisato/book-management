const Record = require("../models/Record");

const getAllRecords = async (req, res) => {
  const id = req.user._id;
  const Records = await Record.find({ user: id });
  res.status(200).json(Records);
};

const getRecord = async (req, res) => {
  const RecordId = req.params.id;
  const RecordName = req.body.name;
  const Record = await findOrCreateRecord(RecordId, RecordName);
  res.status(200).json(Record);
};

const createRecord = async (req, res) => {
  const userId = req.user._id;
  const record = { ...req.body, user: userId };
  await Record.create(record)
    .then((result) => res.json(result))
    .catch((error) => res.status(404).json(error._message));
};

const updateRecord = async (req, res) => {
  const RecordId = req.params.id;
  const data = req.body;

  await Record.findByIdAndUpdate(RecordId, {
    $set: {
      memo: data.memo,
      status: data.status,
      rating: data.rating,
      page: data.page,
    },
  });
  res.status(200).json(data);
};

const statusChangeRecord = async (req, res) => {
  const recordId = req.params.id;
  const status = req.body.status;

  await Record.findByIdAndUpdate(recordId, {
    $set: { status: status },
  });
  res.status(200).json({ message: "ok" });
};

const deleteRecord = async (req, res) => {
  const RecordId = req.params.id;
  await Record.findByIdAndDelete(RecordId);
  res.status(200).json({ messgae: "削除しました" });
};

module.exports = {
  getAllRecords,
  getRecord,
  createRecord,
  updateRecord,
  statusChangeRecord,
  deleteRecord,
};
