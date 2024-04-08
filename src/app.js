import express from 'express';
import userRoute from './routes/userRoute.js';
const routes = express.Router();

routes.use('/users', userRoute);

export default routes;