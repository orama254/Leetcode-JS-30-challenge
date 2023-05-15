/**
 * @param {number} millis
 */
async function sleep(millis) {
    function callback(resolve){
        setTimeout(resolve, millis)
    }
 
    return new Promise(callback)
 }
 
 /** 
  * let t = Date.now()
  * sleep(100).then(() => console.log(Date.now() - t)) // 100
  */