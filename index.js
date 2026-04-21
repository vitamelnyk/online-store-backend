import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './db.js';

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();