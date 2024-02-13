const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const config = require("../config/config");
const jwt = require("jsonwebtoken");


const securePassword = async(password) => {
    try{

        const passwordHash = await bcryptjs.hash(password, 10 );

        return passwordHash;

    }catch (error){
        res.status(400).send(error.message);

    }
}


const createToken = async(id) => {
    try{

      const token =  await jwt.sign({_id:id}, config.secret_jwt)

        return token;

    }catch (error){
        res.status(400).send(error.message);

    }
}




const register = async(req, res)=>{
    try{
        const {name, email, password, mobile} = re.body;

        const checkUserEmail = await User.findOne({email: email})
        if(checkUserEmail){
            res.status(200).send({sucess:false, msg: "This Email Already exists"})
        }
        const spassword = await securePassword(password);
        const user =  new User({
                name: name,
                email: email,
                mobile:mobile,
                password:spassword,
            })
        const userData = await user.save();
        res.status(200).send({sucess:true, data: userData})
    }catch (error) {
        res.status(400).send(error.message);
    }
}


const login = async(req, res)=>{
    try{
        const { email, password} = re.body;

        const userData = await User.findOne({email: email})
        if(!userData){
            res.status(200).send({sucess:false, msg: "Email Not Found"})
        }

        const passwordMatch = await bcryptjs.compare(password , userData.password );
        if(!passwordMatch){
            res.status(200).send({sucess:false, msg: "Invalid Password"})
        }

        const tokenData = await createToken(userData._id);

        const userReesult = {
            _id: userData._id,
            name: userData.name,
            email: userData.email,
            password: userData.password,
            token:  tokenData,
        }

        const response = {
            success: true,
            msg: "User Details",
            data : userReesult
        }

        res.status(200).send({success:true, data: response});

    }catch (error) {
        res.status(400).send(error.message);

    }
}

module.exports = {
    register,
    login
}