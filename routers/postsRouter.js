const express = require('express');
const {getPosts,
	singlePost,
	createPost,
	updatePost,
	deletePost} = require('../controllers/postsController');
const { identifier } = require('../middlewares/identification');
const router = express.Router();

router.get('/all-posts', getPosts);
router.get('/single-post', singlePost);
router.post('/create-post', identifier,createPost);

router.put('/update-post', identifier, updatePost);
router.delete('/delete-post', identifier,deletePost);

module.exports = router;