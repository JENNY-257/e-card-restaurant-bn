import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './src/app.js';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(` app is running on ${PORT}`);
})

app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('error',() =>{
console.log("database connection failed");
})

db.once('open',() =>{
    console.log("database connection succefully");
})

app.use('/api/v1',routes);