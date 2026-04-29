import { Brand } from "../models/models.js";
import ApiError from "../error/ApiError.js";

export async function create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({name});
    return res.json(brand);
};

export async function getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
};