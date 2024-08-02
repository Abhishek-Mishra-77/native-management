const Employee = require("../models/employeeModal");

const AddEmployee = async (req, res) => {
    const {
        employeeId,
        employeeName,
        designation,
        joiningDate,
        dateOfBirth,
        salary,
        activeEmployee,
        phoneNumber,
        address
    } = req.body.employeeDetails;

    try {
        const newEmployee = await Employee.create({
            employeeId,
            employeeName,
            designation,
            joiningDate,
            dateOfBirth,
            salary,
            activeEmployee,
            phoneNumber,
            address
        });

        return res.status(201).json({ message: "Employee saved successfully", employee: newEmployee });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred while saving the employee" });
    }
};

const getAllEmployee = async (req, res) => {
    try {
        const employees = await Employee.find();
        return res.status(200).json(employees);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred while fetching employees" });
    }
};

module.exports = { AddEmployee, getAllEmployee };
