/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;

    const increment = () => ++count;

    const decrement = () => --count;

    const reset = () => (count = init);


    return {
        increment,
        decrement,
        reset
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */