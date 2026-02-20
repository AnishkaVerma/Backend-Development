export function validateEmployee(req, res, next) {
  const { name, department, salary } = req.body;

  if (!name || !department || !salary) {
    return res.send("All fields required");
  }

  if (Number(salary) < 0) {
    return res.send("Salary cannot be negative");
  }

  next();
}