/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    let result = [];
    const flattener = (nums, l) => {
      for (const num of nums) {
        if (Array.isArray(num) && l > 0 && l <= n) {
          flattener(num, l - 1);
        } else {
          result.push(num);
        }
      }
    }

    flattener(arr, n);
    return result;
    
};