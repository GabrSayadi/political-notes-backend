const { verify } = require('jsonwebtoken')
const { checkTokenError, noneAccess } = require('../utils/response.global')

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get('authorization');
        if (token) {
            token = token.slice(7)
            verify(
                token,
                'tokenpass123',
                (err, decoded) => {
                    if (err)
                        checkTokenError(res);
                    else
                        next();
                }
            )
        }
        else
            noneAccess(res);
    }
}