const Employee = require('../models/employee');
const Controllers = {
    getEmployees: async (req,res) => {
        const employees = await Employee.find();
        res.json(employees);
    },
    createEmployee: async(req, res) => {
        const newEmployee = new Employee(req.body)
        await newEmployee.save();
        res.send({message: `Employee created`})
    },
    getEmployee: async (req, res) => {
        const employee = await Employee.findById(req.params.id)
        res.send(employee)
    },
    EditEmployee: async (req, res) => {
        await Employee.findByIdAndUpdate(req.params.id, req.body);
        res.json({status: `Employee updated`})
    },
    deleteEmployee: async (req, res) => {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({status: `Employee deleted`})
    },
}

module.exports = Controllers;