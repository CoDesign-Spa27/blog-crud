const express = require('express');
const router = express.Router();
const { getAllPosts, getPostById, createPost, deletePost,updatePost } = require('../controllers/PostController');

router.get('/posts',getAllPosts);
router.get('/posts/:id',getPostById);
router.post('/posts',createPost);
router.delete('/posts/:id',deletePost);
router.put('/posts/:id',updatePost);

module.exports = router