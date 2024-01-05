import { DataTypes } from "sequelize";
import db from "../database/db.js";

export const News = db.define(
    "News",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        img: {
            type: DataTypes.STRING,
        },
        title:{
            type: DataTypes.STRING,
        },
        description:{
            type:DataTypes.STRING,
        },
        Date:{
            type:DataTypes.STRING,
        }
    },
    {
        timestamps:true,
    },
)
