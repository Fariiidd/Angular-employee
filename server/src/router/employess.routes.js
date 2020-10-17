const { Router } = require('express');
const app = Router();
const EmployessController = require('../controllers/employess.controller');

app.get('/', EmployessController.getEmployees);
app.post('/', EmployessController.createEmployee);
app.get('/:id', EmployessController.getEmployee);
app.put('/:id', EmployessController.EditEmployee);
app.delete('/:id', EmployessController.deleteEmployee);

module.exports = app;