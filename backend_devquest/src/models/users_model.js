    import { DataTypes } from 'sequelize';
    import { sequelize } from '../config/db.js';
    import { tipo_usuario } from './tipo_usuario_model.js';

    export const Usuario = sequelize.define('usuario', {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING
        },
        contraseña: {
            type: DataTypes.STRING
        },
        tipo_usuario: {
            type: DataTypes.INTEGER,
            references: {
                model: tipo_usuario,
                key: 'id_tipousuario'
            }
        },
        correo_electronico: {
            type: DataTypes.STRING
        }
        }, {
            freezeTableName: true,
            timestamps: false
        }
    );