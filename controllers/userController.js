import ApiError from "../error/ApiError.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, Basket } from '../models/models.js';

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
}

export async function registration(req, res, next) {
    const { email, password, role } = req.body;

    if (!email || !password) {
        return next(ApiError.badRequest('Некорректний email или password'));
    }

    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
        return next(ApiError.badRequest('Пользователь с таким email уже существует'));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
}

export async function login(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(ApiError.badRequest('Некорректний email или password'));
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
        return next(ApiError.badRequest('Пользователь с таким email не найден'));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
        return next(ApiError.badRequest('Указан неверный пароль'));
    }

    const token = generateJwt(user.id, user.email, user.role);
    return res.json({token});
}

export async function check(req, res, next) {
}