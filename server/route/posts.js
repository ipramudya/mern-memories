import { Router } from 'express';
import { getPosts, createPost } from '../controller/posts.js';

const router = Router();

router.route('/').get(getPosts).post(createPost);

export default router;
