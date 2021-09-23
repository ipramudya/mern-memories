import { Router } from 'express';
import { getPosts, createPost, updatePost } from '../controller/posts.js';

const router = Router();

router.route('/').get(getPosts).post(createPost);
router.patch('/:id', updatePost);

export default router;
