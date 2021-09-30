const router = require("express").Router();

const {
  getAllRecords,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordsController");

router.get("/", getAllRecords);

router.post("/", createRecord);

router.put("/:id", updateRecord);

router.delete("/:id", deleteRecord);

module.exports = router;
