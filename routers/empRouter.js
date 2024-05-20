import Router from "express";
import { Register, Login, Logout } from "../controllers/authController.js";
import {
  addEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/empController.js";
const router = Router();

router.get("/", getEmployees);

router.get("/:id", getEmployee);

router.post("/", addEmployee);

router.delete("/:id", deleteEmployee);

router.put("/:id", updateEmployee);

export default router;
