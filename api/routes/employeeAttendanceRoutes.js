const express = require('express');
const router = express();

const { markAttendance, getAttendance, getAttendanceReport } = require("../controllers/employeeAttendanceControllers");
router.post("/attendance", markAttendance);
router.get("/getattendance", getAttendance);
router.get("/attendance-summary", getAttendanceReport);


module.exports = router;