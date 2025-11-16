import { Curso, Tipo_curso } from '../models/index.js';

// Obtener todos los usuarios con su tipo de usuario
export const getCorsues = async (req, res) => {
    try {
        const users = await Curso.findAll({
            include: { 
                model: tipo_curso, 
                as: 'tipo', 
                attributes: ['nombre'] 
            }
        });

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};