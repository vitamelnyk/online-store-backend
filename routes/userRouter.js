import { Router } from "express";
import { registration, login, check } from "../controllers/userController.js";

const router = new Router();

router.post('/registration', registration);
router.post('/login', login);
router.get('/auth', check);


export default router;