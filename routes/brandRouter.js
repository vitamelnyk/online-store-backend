import { Router } from "express";
import { create, getAll } from '../controllers/brandController.js';

const router = new Router();

router.post('/',(req, res) => {
    create(req, res);
});
router.get('/',(req, res) => {
    getAll(req, res);
});

export default router;