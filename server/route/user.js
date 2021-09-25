import { Router } from 'express';
import { signin, register } from '../controller/user.js';

const router = Router();

router.post('/signin', signin);
router.post('/register', register);

export default router;
