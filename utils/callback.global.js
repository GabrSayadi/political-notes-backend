/* 
    callBack function
*/

module.exports = {
    serviceCallBack: (callback, err, data) => {
        return err
        ?
            callback(err)
        :
            callback(null, data)
    }
}