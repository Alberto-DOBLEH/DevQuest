import { Curso, Tipo_curso } from '../models/index.js';

// Obtener todos los cursos(solo la informacion general)
export const getCurses = async (req, res) => {
    try {
        const users = await Curso.findAll({
            include: { 
                model: Tipo_curso, 
                as: 'tipo', 
                attributes: ['nombre'] 
            }
        });

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

