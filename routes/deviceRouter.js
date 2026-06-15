import { Router } from "express";
import { create, getAll, getOne } from "../controllers/deviceController.js";

const router = new Router();

router.post('/', (req, res, next) => {
    create(req, res, next);
});
router.get('/', (req, res) => {
    getAll(req, res);
});
router.get('/:id', (req, res) => {
    getOne(req, res);
});


export default router;