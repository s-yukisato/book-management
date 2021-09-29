const router = require("express").Router();

const {
  getAllRecords,
  getRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordsController");

router.get("/", getAllRecords);

router.get("/:id", getRecord);

router.post("/", createRecord);

router.post("/update", updateRecord);

router.post("/delete", deleteRecord);

module.exports = router;
