import mongoose from 'mongoose';
import PostMessage from '../model/PostMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { body: post } = req;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const { body } = req;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ message: 'Invalid Id' });
  }
  try {
    const updatedPost = { _id, ...body };
    await PostMessage.findByIdAndUpdate(_id, updatedPost, {
      new: true,
    });
    res.status(202).json({ ...updatedPost });
  } catch (error) {
    res.status(304).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ message: 'Invalid Id' });
  }

  try {
    await PostMessage.findByIdAndDelete(_id);
    res.status(202).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  /* generated from auth middleware */
  const { userId } = req;
  if (!userId) return res.status(403).json({ message: 'Unauthenticated' });

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ message: 'Invalid Id' });
  }

  const post = await PostMessage.findById(_id);

  /* implements like once */
  const index = post.likes.findIndex((id) => id === String(userId));
  if (index === -1) {
    /* if found index's different from userId, user can perform LIKE */
    post.likes.push(req.userId);
  } else {
    /* if found index's same, user can only DISLIKE the post */
    post.likes = post.likes.filter((id) => id !== String(userId)); // filter for only different user
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.status(202).json({ updatedPost });
};
