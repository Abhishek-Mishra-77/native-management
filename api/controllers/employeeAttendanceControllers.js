const Attendance = require("../models/attendanceModal");
const moment = require("moment");

const markAttendance = async (req, res) => {
  const { employeeId, employeeName, date, status } = req.body;
  try {
    const existingAttendance = await Attendance.findOne({ employeeId, date });
    if (existingAttendance) {
      existingAttendance.status = status;
      await existingAttendance.save();
    }
    else {
      const newAttendance = await Attendance.create({
        employeeId,
        employeeName,
        date,
        status
      })
      return res.status(201).json({ newAttendance })
    }
    return res.status(201).json({ existingAttendance })
  }
  catch (error) {
    return res.status(500).json({ message: "Error submitting attendance." });
  }
}

const getAttendance = async (req, res) => {
  try {
    const { date } = req.query;
    const attendanceData = await Attendance.find({ date: date });
    return res.status(200).json(attendanceData)

  }
  catch (error) {
    return res.status(500).json({ message: "Error fetching attendance." });
  }
}


const getAttendanceReport = async (req, res) => {
  try {
    const {month , year} = req.query;

    console.log("Query parameter" , {month , year});
        const startDate = moment(`${year}-${month}-01` , "YYYY-MM-DD").startOf("month").toDate();
  }
  catch (error) {
    return res.status(500).json({ message: "Error fetching summary report." });
  }
}


module.exports = { markAttendance, getAttendance, getAttendanceReport };