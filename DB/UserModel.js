import {sequelize} from './Connection.js';
import DataTypes from 'sequelize';

const UserModel = sequelize.define('User',{
    UserName:{
       type:DataTypes.STRING,
       allowNull:false
    },
    Email:{
        type:DataTypes.STRING(150),
        allowNull:false,
        uniqe:true
     },
     Password:{
        type:DataTypes.STRING(150),
        allowNull:false
     },
     ConfirmEmail:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
     },
     Salary:DataTypes.FLOAT,
     age:DataTypes.INTEGER,
});


export default UserModel;