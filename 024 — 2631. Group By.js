/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const result = {}

    for(const obj of this){
        const key = fn(obj);
        result[key] = result[key] || [];
        result[key].push(obj)
    }
    return result
    
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */