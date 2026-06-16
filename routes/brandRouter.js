import { Router } from "express";
import { create, getAll } from '../controllers/brandController.js';
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware.js";

const router = new Router();

router.post('/', checkRoleMiddleware('ADMIN'),(req, res) => {
    create(req, res);
});
router.get('/',(req, res) => {
    getAll(req, res);
});

export default router;