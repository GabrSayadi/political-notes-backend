/*
    response method:
    @Error: errorRes(response) 
    @NotFound: notFoundRes(response)
    @Data: dataRes(response)
    @Invalid email || password : invalidUserRes(response)
*/
const { 
    ERROR_RES,
    INVALID_USER,
    NOT_FOUND,
    NONE_ACC
} = require('../Exception/Exception.global')

module.exports = {
    errorRes: (res) => {
        return res.status(500).json(ERROR_RES);
    },
    notFoundRes: (res)  => {
        return res.status(401).json(NOT_FOUND);
    },
    invalidUserRes: (res) => {
        return res.status(401).json(INVALID_USER);
    },
    notAccess: (res) => {
        return res.status(401).json(NONE_ACC)
    }
    ,
    dataRes: (res, data) => {
        return res.status(200).json({
            code: '200',
            msg: 'success',
            data: {
                data
            }
        });
    },
}