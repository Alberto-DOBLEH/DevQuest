import { Usuario } from "./users_model.js";
import { tipo_usuario } from "./tipo_usuario_model.js";
import { Curso } from "./cursos_model.js";
import { Tipo_curso } from "./tipo_curso_model.js";

// Relaciones
Usuario.belongsTo(tipo_usuario, { foreignKey: 'tipo_usuario', as: 'tipo' });
tipo_usuario.hasMany(Usuario, { foreignKey: 'tipo_usuario', as: 'usuario' });

Curso.belongsTo(Tipo_curso, { foreignKey: 'tipo_curso', as: 'tipo' });
Tipo_curso.hasMany(Curso, { foreignKey: 'tipo_curso', as: 'curso'});

export { Usuario, tipo_usuario, Curso, Tipo_curso };
