import express from "express";
import employeeRoutes from "./routes/employeeRoutes.js";

const app = express();
const PORT = 5000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.use("/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});