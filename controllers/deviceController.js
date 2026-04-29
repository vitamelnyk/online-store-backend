import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from "url";
import path from 'path';
import ApiError from '../error/ApiError.js';
import { Device } from "../models/models.js";

export async function create(req, res, next) {
    try {
        const { name, price, brandId, typeId, info } = req.body;
        const { img } = req.files;
        let fileName = uuidv4() + '.jpg';
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        img.mv(path.resolve(__dirname, '..', 'static', fileName));

        const device = await Device.create({ name, price, brandId, typeId, img: fileName });

        return res.json(device);
    } catch (e) {
        next(ApiError.badRequest(e.message));
    }
};

export async function getAll(req, res) {
    
};

export async function getOne(req, res) {

};