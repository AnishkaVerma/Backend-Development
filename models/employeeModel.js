import fs from "fs";

const EMPLOYEE_FILE = "employees.json";

// Read employees
function readEmployees() {
  if (!fs.existsSync(EMPLOYEE_FILE)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(EMPLOYEE_FILE, "utf-8"));
}

// Write employees
function writeEmployees(data) {
  fs.writeFileSync(EMPLOYEE_FILE, JSON.stringify(data, null, 2));
}

export { readEmployees, writeEmployees };