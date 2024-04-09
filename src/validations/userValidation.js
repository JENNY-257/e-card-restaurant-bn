import Joi from "joi";
import PasswordComplexity from 'joi-password-complexity';

  
const validateForm = (schema) => (payload) => schema.validate(
    payload, { abortEarly: false });

    const signUpSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        phoneNumber: Joi.string(),
        password:  PasswordComplexity({
            min: 8,
            max: 15,
            lowerCase: 1,
            numeric: 1,
          }).required(),    });

    const validatesignUp = validateForm(signUpSchema);

 export const signupSchemaValidation = ( req, res, next) => {
    const { error } = validatesignUp(req.body);
    if (error) {
      res.status(400).json({
        status: 400,
        error: error.details.map((detail) => detail.message.replace(/[^a-zA-Z0-9 ]/g, '')),
      });
    } else {
      next();
    }
};

const loginSchema = Joi. object({
    email: Joi.string().email().required(),
    password:  PasswordComplexity({
        min: 8,
        max: 15,
        lowerCase: 1,
        numeric: 1,
      }).required(), 
    });


const validateLogin = validateForm(loginSchema);

export const loginSchemaValidation = (req,res,next) => {
    const { error } = validateLogin(req.body);
    if (error) {
      res.status(400).json({
        status: 400,
        error: error.details.map((detail) => detail.message.replace(/[^a-zA-Z0-9 ]/g, '')),
      });
    } else {
      next();
    }  
}