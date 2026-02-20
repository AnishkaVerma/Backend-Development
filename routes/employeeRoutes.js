import express from "express";
import { 
  createEmployee, 
  getEmployees, 
  updateEmployee, 
  deleteEmployee,
  showAddForm
} from "../controllers/employeeController.js";

import { validateEmployee } from "../middlewares/validateEmployee.js";

const router = express.Router();

// Show all employees
router.get("/", getEmployees);

// Show add employee form
router.get("/add", showAddForm);

// Handle form submission
router.post("/add", validateEmployee, createEmployee, (req, res));

// Update employee
router.post("/update/:id", updateEmployee);

// Delete employee
router.get("/delete/:id", (req, res)=>{
    deleteEmployee(req, res)
    res.render("index")
});

export default router;