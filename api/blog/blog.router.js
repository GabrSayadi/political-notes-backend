const router = require('express').Router();
const {
    createBlog,
    updateBlogById,
    deleteBlogById,
    listOfBlog,
    getBlogWithId
} = require('./blog.controller.js');
const { checkToken } = require('../../auth/authToken.js') 

router.post('/', checkToken, createBlog);
router.patch('/', checkToken, updateBlogById);
router.delete('/', checkToken, deleteBlogById);
router.get('/', checkToken, listOfBlog);
router.get('/:id', checkToken, getBlogWithId);

module.exports = router