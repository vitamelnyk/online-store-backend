import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './db.js';
import * as models from './models/models.js';
import router from './routes/index.js';
import { json } from 'sequelize';
import { errorHandler } from './middleware/ErrorHandlingMiddleware.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// Обработка ошибок, последний Middleware
app.use(errorHandler);

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