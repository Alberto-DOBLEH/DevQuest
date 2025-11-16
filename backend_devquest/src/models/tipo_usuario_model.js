import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const tipo_usuario = sequelize.define('tipo_usuario', {
    id_tipousuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    }
    }, {
        freezeTableName: true,
        timestamps: false
    }
);