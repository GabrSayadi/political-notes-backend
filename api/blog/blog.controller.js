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
    createBlog: (req, res) => { /* Create new Blog */
        const dataOfBlog = req.body

        createBlog(dataOfBlog, (err, data) => {
            if (err)
                blogSystemError(res);
            
            blogData(res, data.affectedRows);
        });
    },
    updateBlogById: (req, res) => { /* Update Blog */
        const updateData = req.body

        updateBlog(updateData, (err, data) => {
            if (err)
                blogSystemError(res);
            
            if (!data)
                blogNotFound(res);
            else 
                blogData(res, data.affectedRows);
        });
    },
    deleteBlogById: (req, res) => { /* Delete Blog */
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
    listOfBlog: (req, res) => { /* Blog List */
        
        getListOfBlog((err, data) => {
            if (err)
                blogSystemError(res)
            
            blogData(res, data)
        });
    },
    getBlogWithId: (req, res) => { /* Get Blog by id */
        const id = req.params.id

        getBlogById(id, (err, data) => {
            if (err)
                blogSystemError(res)
            
            blogData(res, data)
        });
    }
}