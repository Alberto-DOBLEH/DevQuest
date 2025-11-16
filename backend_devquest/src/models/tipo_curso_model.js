import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Tipo_curso = sequelize.define('tipo_cursos', {
    id_tipos_cursos: {
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