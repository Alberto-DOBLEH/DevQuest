import express from 'express';
import { 
    getCurses
} from '../controllers/cursos_controllers.js'

const router = express.Router();

router.get('/', getCurses);

export default router;