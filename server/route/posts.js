import { Router } from 'express';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controller/posts.js';
import auth from '../middleware/auth.js';

const router = Router();

router.get('/', getPosts);

/* restricted route by auth middleware */
router.post('/', auth, createPost);
router.route('/:id').patch(auth, updatePost).delete(auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;
