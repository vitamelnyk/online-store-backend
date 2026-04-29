import { Type } from "../models/models.js";
import ApiError from "../error/ApiError.js";

export async function create(req, res) {
    const { name } = req.body;
    const type = await Type.create({name});
    return res.json(type);
};

export async function getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
};