import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
phoneNumber:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
role:{
    type:String,
    default:"client"
},
isActive:{
    type:String,
    default:true
},
verified: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model('User', userSchema);
export default User;