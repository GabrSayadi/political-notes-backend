const { 
    createBlog,
    updateBlog,
    deleteBlog,
    getListOfBlog,
    getBlogById
} = require('./blog.service');
const { 
    blogData,
    blogSystemError,
    blogNotFound
} =  require('../../utils/response.global');

module.exports = {
    createBlog: (req, res) => {
        const blogData = req.body

        createBlog(blogData, (err, data) => {
            if (err)
                return res.status(500).json({
                    code: 'x0001',
                    msg: 'System Error',
                    error: err
                })
            
            return res.status(200).json({
                code: 'x0001',
                msg: data
            })
        });
    },
    updateBlogById: (req, res) => {
        const updateData = req.body

        updateBlog(updateData, (err, data) => {
            if (err)
                blogSystemError(res)
            
            if (!data)
                blogNotFound(res)
            else 
                blogData(res, data.affectedRows)
        });
    },
    deleteBlogById: (req, res) => {
        const id = req.body

        deleteBlog(id, (err, data) => {
            if (err)
                blogSystemError(res)
            
            if (!data)
                blogNotFound(res)
            else
                blogData(res, data.affectedRows)
        });
    },
    listOfBlog: (req, res) => {
        
        getListOfBlog((err, data) => {
            if (err)
                blogSystemError(res)
            
            blogData(res, data)
        });
    },
    getBlogWithId: (req, res) => {
        const id = req.params.id

        getBlogById(id, (err, data) => {
            if (err)
                blogSystemError(res)
            
            blogData(res, data)
        });
    }
}