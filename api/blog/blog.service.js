const pool = require("../../config/database.config");
const { serviceCallBack } = require("../../utils/callback.global");
const { createUpdateTime } = require("../../utils/time.global")

module.exports = {
    createBlog: (data, callback) => { /* Create Blog */
        pool.query(
            `insert into blog(blogTitle, blogBody, createAt, updateAt, author, createUser) values(?,?,?,?,?,?)`,
            [
                data.blogTitle,
                data.blogBody,
                createUpdateTime(),
                createUpdateTime(),
                data.author,
                data.createUser
            ],
            (err, result, falid) => {
                serviceCallBack(callback, err, result)
            }
        );
    },
    updateBlog: (data, callback) => { /* Update Blog */
        pool.query(
            `update blog set blogTitle = ?, blogBody = ?, updateAt =?  where id = ?`,
            [
                data.blogTitle,
                data.blogBody,
                createUpdateTime(),
                data.id
            ],
            (err, result, falid) => {
                serviceCallBack(callback, err, result)
            }
        );
    },
    deleteBlog: (data, callback) => { /* Delete Blog */
        pool.query(
            `delete from blog where id = ?`,
            [
                data.id
            ],
            (err, result, falid) => {
                serviceCallBack(callback, err, result)
            }
        );
    },
    getListOfBlog: callback => { /* Blog list */
        pool.query(
            `select * from blog`,
            [],
            (err, result, falid) => {
                serviceCallBack(callback, err, result)
            }
        );
    },
    getBlogById: (data, callback) => { /* Get Blog By Id */
        pool.query(
            `select * from blog where id = ?`,
            [
                data
            ],
            (err, result, falid) => {
                serviceCallBack(callback, err, result)
            }
        );
    }
}