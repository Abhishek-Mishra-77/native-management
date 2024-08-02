const express = require("express");
const router = express.Router();

const { AddEmployee, getAllEmployee } = require("../controllers/employeeControllers");

router.post("/addEmployee", AddEmployee);
router.get("/employees", getAllEmployee);

module.exports = router;