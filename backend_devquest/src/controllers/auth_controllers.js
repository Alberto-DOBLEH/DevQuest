import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Usuario } from "../models/index.js";
import { Op } from "sequelize";

export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    const user = await Usuario.findOne({
      where: {
        [Op.or]: [
          { correo_electronico: identifier },
          { username: identifier }
        ]
      }
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario/correo no existe" });
    }

    
    if(password !== user.contraseña){
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    //const validPassword = await bcrypt.compare(password, user.contraseña);

    //if (!validPassword) {
    //  return res.status(401).json({ error: "Contraseña incorrecta" });
    //}

    const token = jwt.sign(
      {
        id: user.id_usuario,
        email: user.correo_electronico,
        username: user.username
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    return res.json({ ok: true, token });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno" });
  }
};
