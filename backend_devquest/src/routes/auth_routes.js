import express from "express";
import { 
    login 
} from "../controllers/auth_controllers.js";

const router = express.Router();

router.post('/login', login);

export default router;