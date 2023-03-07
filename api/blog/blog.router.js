const router = require('express').Router();
const {
    createBlog,
    updateBlogById,
    deleteBlogById,
    listOfBlog,
    getBlogWithId
} = require('./blog.controller.js');


router.post('/', createBlog);
router.patch('/', updateBlogById);
router.delete('/', deleteBlogById);
router.get('/', listOfBlog);
router.get('/:id', getBlogWithId);

module.exports = router