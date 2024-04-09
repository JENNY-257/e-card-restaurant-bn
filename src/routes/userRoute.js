import { Router } from "express";
import { loginSchemaValidation, 
         signupSchemaValidation 
        } from "../validations/userValidation.js";
import { registerUser, userLogin } from "../controllers/userController.js";

const userRoute = Router();

userRoute.post('/signup', signupSchemaValidation, registerUser);
userRoute.post('/login',loginSchemaValidation,userLogin);

export default userRoute;