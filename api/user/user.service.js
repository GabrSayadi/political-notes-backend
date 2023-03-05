const pool = require("../../config/database.config") /* database pool */ 
const { createUpdateTime } = require('../../utils/time.global') /* Date utiles */
const { serviceCallBack } = require('../../utils/callback.global') /* Callback function */

module.exports = {
    userRegister: (data, callback) => {
        pool.query(
            `insert into user(userName, userAccount, userRole, userPassword, createAt, updateAt) values(?,?,?,?,?,?)`,
            [
                data.userName,
                data.userAccount,
                data.userRole,
                data.userPassword,
                createUpdateTime(),
                createUpdateTime()
            ],
            (err, result, fields) => {
                serviceCallBack(callback, err, result)
            }
        )
    },
    userLogin: (data, callback) => {
        pool.query(
            `select * from user where userAccount =? and userPassword =?`,
            [
                data.userAccount,
                data.userPassword
            ],
            (err,  result, fields) => {
                serviceCallBack(callback, err, result)
            }
        )
    },
    updateUser: (data, callback) => {
        pool.query(
            `update user set userName = ?, userAccount = ?, userPassword = ?, updateAt = ? where id = ?`,
            [
                data.userName,
                data.userAccount,
                data.userPassword,
                createUpdateTime(),
                data.id
            ],
            (err, result, fields) => {
                serviceCallBack(callback, err, result)
            }
        )
    },
    deleteUser: (data, callback) => {
        pool.query(
            `delete from user where id = ?`,
            [ data.id ],
            (err, result, fields) => {
                serviceCallBack(callback, err, result)
            }
        )
    },
    getUserById:  (id, callback) => {
        pool.query(
            `select * from user where id = ?`,
            [ id ],
            (err, result, fields) => {
                serviceCallBack(callback, err, result)
            }
        )
    },
    listUser: callback => {
        pool.query(
            `select * from user`,
            [],
            (err, result, fields) => {
                serviceCallBack(callback, err, result)
            }
        )
    }
};