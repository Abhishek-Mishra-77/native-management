const Employee = require("../models/employeeModal");

const AddEmployee = async (req, res) => {
    const { employeeId,
        employeeName,
        designation,
        joiningData,
        dataOfBirth,
        salary,
        activeEmployee,
        phoneNumber,
        address } = req.body;

    try {
        const newEmployee = new Employee.create({
            employeeId,
            employeeName,
            designation,
            joiningData,
            dataOfBirth,
            salary,
            activeEmployee,
            phoneNumber,
            address
        })

        await newEmployee.save();

        return res.status(201).json({ message: "Employee saved successfully", employee: newEmployee })

    }
    catch (error) {
        return res.status(500).json({})
    }
}


const getAllEmployee = async (req, res) => {

    try {
        const employees = await Employee.find();
        return res.status(201).json(employees)
    }
    catch (error) {
        return res.status(500).json({})
    }
}


module.exports = { AddEmployee, getAllEmployee }