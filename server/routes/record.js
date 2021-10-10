const router = require("express").Router();

const {
  getAllRecords,
  createRecord,
  updateRecord,
  statusChangeRecord,
  deleteRecord,
} = require("../controllers/recordsController");

router.get("/", getAllRecords);

router.post("/", createRecord);

router.put("/:id", updateRecord);

router.put('/status/:id', statusChangeRecord);

router.delete("/:id", deleteRecord);

module.exports = router;
