import UserModel from "../../../DB/UserModel.js";  // page function

const GetUsers = async(req,res)=>{
    const users = await UserModel.findAll(); // == SELECT * FROM testing
 return res.json({message:"success",users});
}


export default GetUsers;