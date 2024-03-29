const {
    userRegister,
    userLogin,
    updateUser,
    deleteUser,
    getUserById,
    listUser
} = require('./user.service')
const {
    userSystmeError,
    userData,
    notFoundRes,
    invalidUser
} = require('../../utils/response.global')
const { sign } = require('jsonwebtoken')


module.exports = {
    register: (req, res) => {  /* Create new user */
        const registerData = req.body;
        
        userRegister(registerData, (err, data) => {
            if (err)
                userSystmeError(res)

            userData(res, data.insertId)
        });
    },
    login: (req, res) => { /* login User */
        const loginData = req.body;

        userLogin(loginData, (err, data) => {
            if (err)
                userSystmeError(res)

            if (!data.length)
                invalidUser(res)
            else {
                const token = sign(
                    {result: data},
                    "tokenpass123",
                    { expiresIn: '4h'}
                );
                return res.status(200).json(
                    {  
                        code: '200',
                        msg: 'success',
                        data: data[0].userRole,
                        token: token 
                    }
                );
            }
        });
    },
    updateUserById: (req, res) => {
        const updateData = req.body

        updateUser(updateData, (err, data) => {
            if (err)
                userSystmeError(res)
            
            if (!data)
                notFoundRes(res)
            else 
                userData(res, data.affectedRows)
        }) 
    },
    deleteUserById: (req, res) => {
        const id = req.body

        deleteUser(id, (err, data) => {
            if (err) 
                userSystmeError(res)
            
            if (!data)
                notFoundRes(res)
            else 
                userData(res, data.affectedRows)
        })
    },
    getUser: (req, res) => {
        const id = req.params.id

        getUserById(id,(err, data) => {
                if (err)
                    userSystmeError(res)

                if (!data.length)
                    notFoundRes(res)
                else
                    userData(res, data)
                
        });
    },
    getUsers: (req, res) => {

        listUser((err, data) => {
            if (err)
                userSystmeError(res)
            userData(res, data)
        });
    }
}