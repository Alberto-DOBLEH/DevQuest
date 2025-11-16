import express from 'express';
import { 
    getCorsues
} from '../controllers/cursos_controllers.js'

const router = express.Router();

router.get('/', getCorsues);

export default router;