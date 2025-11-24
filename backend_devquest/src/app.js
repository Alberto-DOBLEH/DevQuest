import express from "express";
import cors from "cors";
import morgan from "morgan";
import users_routes from "./routes/users_routes.js";
import cursos_routes from "./routes/cursos_routes.js";
import auth_routes from "./routes/auth_routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Rutas de usuario
app.use("/api/users", users_routes);

//Rutas de cursos
app.use("/api/cursos", cursos_routes);

//Rutas de auth
app.use("/api/auth", auth_routes);

export default app;
