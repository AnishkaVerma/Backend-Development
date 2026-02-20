import { readEmployees, writeEmployees } from "../models/employeeModel.js";


   //SHOW ADD FORM

function showAddForm(req, res) {
  res.render("addEmployee");
}


  // CREATE EMPLOYEE

function createEmployee(req, res) {
  try {
    const { name, gender, department, salary, startDate, profileImage } = req.body;

    if (!name || !gender || !department || !salary || !startDate || !profileImage) {
      return res.status(400).send("All fields required");
    }

    const employees = readEmployees();

    const newEmployee = {
      id: Date.now(),
      name,
      gender,
      department,
      salary: Number(salary),
      startDate,
      profileImage
    };

    employees.push(newEmployee);

    writeEmployees(employees);

    res.status(201).send("Employee created successfully");
  } catch (error) {
    res.status(500).send("Server error");
  }
}


  // GET EMPLOYEES

function getEmployees(req, res) {
  try {
    const employees = readEmployees();
    res.render("index", { employees });
  } catch (error) {
    res.status(500).send("Server error");
  }
}


  // UPDATE EMPLOYEE

function updateEmployee(req, res) {
  try {
    const { id } = req.params;
    const { name, gender, department, salary, startDate, profileImage } = req.body;

    if (!id || !name || !gender || !department || !salary || !startDate || !profileImage) {
      return res.status(400).send("All fields required");
    }

    const employees = readEmployees();

    const index = employees.findIndex(emp => emp.id == id);

    if (index === -1) {
      return res.status(404).send("Employee not found");
    }

    employees[index] = {
      id: Number(id),
      name,
      gender,
      department,
      salary: Number(salary),
      startDate,
      profileImage
    };

    writeEmployees(employees);

    res.status(200).send("Employee updated successfully");
  } catch (error) {
    res.status(500).send("Server error");
  }
}


  // DELETE EMPLOYEE

function deleteEmployee(req, res) {
  try {
    const { id } = req.params;

    const employees = readEmployees();

    const filteredEmployees = employees.filter(emp => emp.id !=id);

    if (filteredEmployees.length === employees.length) {
      return res.status(404).send("Employee not found");
    }

    writeEmployees(filteredEmployees);

    res.status(200).send("Employee deleted successfully");
  } catch (error) {
    res.status(500).send("Server error");
  }
}

export {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
  showAddForm
};