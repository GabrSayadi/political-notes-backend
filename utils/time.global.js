/* 
    All Date function utils
    @function: createUpdateTime() => Create and update time
*/

module.exports = {
    createUpdateTime: () => {
        const now = Date.now()
        const time = new Date(now);
    
        let year = time.getFullYear();
        let month = ('0' + (time.getMonth() + 1)).slice(-2);
        let day = ('0' + time.getDate()).slice(-2);
        let hour = ('0' + time.getHours()).slice(-2);
        let min = ('0' + time.getMinutes()).slice(-2);
        
        return `${year}-${month}-${day} ${hour}:${min}`;
    }
}