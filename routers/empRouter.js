import Router from "express";
import { Register, Login, Logout } from "../controllers/authController.js";
import {
  AddEmployee,
  DeleteEmployee,
  GetEmployee,
  GetEmployees,
  UpdateEmployee,
} from "../controllers/empController.js";
const router = Router();

router.get("/employees", GetEmployees);
router.get("/employee/:id", GetEmployee);

router.post("/employee", AddEmployee);

router.delete("/employee/:id", DeleteEmployee);

router.put("/employee/:id", UpdateEmployee);

export default router;
