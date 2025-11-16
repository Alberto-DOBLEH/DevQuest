import { Usuario, tipo_usuario } from '../models/index.js';

// Obtener todos los usuarios con su tipo de usuario
export const getUsers = async (req, res) => {
    try {
        const users = await Usuario.findAll({
            include: { 
                model: tipo_usuario, 
                as: 'tipo', 
                attributes: ['nombre'] 
            }
        });

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};