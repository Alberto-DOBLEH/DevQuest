import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { Tipo_curso } from './tipo_curso_model.js'

export const Curso = sequelize.define('curso', {
    id_curso: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tipo_curso: {
        type: DataTypes.INTEGER,
        references: {
            model: Tipo_curso,
            key: 'id_tips_cursos'
        }
    },
    medallas: {
        type: DataTypes.INTEGER
    },
    retos_totales: {
        type: DataTypes.INTEGER
    },
    rating: {
        type: DataTypes.FLOAT
    }
    }, {
        freezeTableName: true,
        timestamps: false
    }
);