import { Router } from "express";

import { registerUser } from "../controllers/userController.js";
const userRoute = Router();

userRoute.post('/signup', registerUser);

export default userRoute;