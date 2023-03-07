/*
    response method:
    @Error: userSystmeError(response) 
    @NotFound: userNotFound(response)
    @Data: userData(response)
    @Invalid email || password : invalidUser(response)
*/
const { 
    ERROR_RES,
    INVALID_USER,
    NOT_FOUND,
    NONE_ACC
} = require('../Exception/Exception.global')

module.exports = {
    /* user response */
    userSystmeError: (res) => {
        return res.status(500).json(ERROR_RES);
    },
    userNotFound: (res)  => {
        return res.status(401).json(NOT_FOUND);
    },
    invalidUser: (res) => {
        return res.status(401).json(INVALID_USER);
    },
    notAccess: (res) => {
        return res.status(401).json(NONE_ACC)
    },
    userData: (res, data) => {
        return res.status(200).json({
            code: '0',
            msg: 'success',
            data: {
                data
            }
        });
    },
    /* blog response */
    blogSystemError: (res) => {
        return res.status(500).json(ERROR_RES);
    },
    blogNotFound: (res)  => {
        return res.status(401).json(NOT_FOUND);
    },
    blogData: (res, data) => {
        return res.status(200).json({
            code: '0',
            msg: 'success',
            data: {
                data
            }
        });
    }
}