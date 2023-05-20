/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let called = false;
    let nextCalled = null;
  return function(...args) {
      if(called){
          nextCalled = args
      } else {
          fn(...args);
          called = true
          setTimeout(helperFn, t)
      }

      function helperFn(){
          if(nextCalled){
              fn(...nextCalled);
              called = true;
              nextCalled = null;
              setTimeout(helperFn, t)
          } else {
              called = false;
          }
      }

  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */