import { Router } from "express";

import { registerUser, userLogin } from "../controllers/userController.js";
const userRoute = Router();

userRoute.post('/signup', registerUser);
userRoute.post('/login',userLogin);

export default userRoute;