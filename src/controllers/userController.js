import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async(req, res) => {

    try {

        const {
            firstName, lastName, phoneNumber, 
            email, password, role, isActive
        } = req.body;

        const checkEmailExists = await User.findOne({email:email});

        if(checkEmailExists){
             return res.status(400).json({message:"Email already exists"});
        }
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const createUser = await User.create({
            firstName,
            lastName,
            phoneNumber,
            email,
            password:hashedPassword,
            role,
            isActive,
        });

        return res.status(200).json({
            message:"user created succesfully please verify your email",
            createUser
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"failed to create user account"})
    }

}

export const userLogin = async(req, res) => {
try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(401).json({message:"user not found"});
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

      return res.status(200).json({ message: 'Login successfully', token });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
} catch (error) {
    console.log(error);
    return res.status(500).json({message:"failed to create user account"})
}
}