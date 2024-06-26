import express from 'express';
import ConnectDB from './models/db.js';

import moviesRoute from './routes/movies_route.js';
import userRoute from './routes/auth_route.js';
import seriesRoute from './routes/series_route.js';
import { errorHandler } from './helpers/error.js';

ConnectDB();

const app = express();
const port = 4000;

app.use(express.json());

app.use("/api", moviesRoute);
app.use("/api",userRoute);
app.use("/api",seriesRoute);

app.listen(port, () => {
    console.log(`Server runing at localhost:${port}`);
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.json({
        success: false,
        statusCode,
        message
    }).status(statusCode);
});