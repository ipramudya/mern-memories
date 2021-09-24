import { Router } from 'express';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from '../controller/posts.js';

const router = Router();

router.route('/').get(getPosts).post(createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
