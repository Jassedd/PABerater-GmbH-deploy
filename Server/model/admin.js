import { DataTypes } from "sequelize";
import db from "../database/db.js";

export const Admin = db.define(
    "Admins",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        lastname:{
            type: DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING,
        },
        password:{
            type:DataTypes.STRING,
        },
        Role:{
            type:DataTypes.STRING,
        }   
    },
    {
        timestamps:true,
    },
)

