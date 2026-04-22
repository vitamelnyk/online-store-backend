import ApiError from "../error/ApiError.js";

export async function registration(req, res) {

}

export async function login(req, res) {

}

export async function check(req, res, next) {
    const { id } = req.query;
    if (!id) {
        return next(ApiError.badRequest("Не задан ID"))
    }

    res.json(id);
}