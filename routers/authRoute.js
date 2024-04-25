import Router from "express";
import { Register, Login, Logout } from "../controllers/authController.js";
const router = Router();

router.post("/login", Login);

router.post("/register", Register);

router.post("/logout", Logout);

export default router;
