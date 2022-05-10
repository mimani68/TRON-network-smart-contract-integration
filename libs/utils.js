module.exports = {
    ratelimitDelay: async (delay) => {
        if ( !delay ) {
            delay = 1500
        }
        return new Promise((res,rej)=>{
            setTimeout(() => {
                res()
            }, delay);
        })
    }
}