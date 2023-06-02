/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let firstNum = 0;
    let secondNum = 1;

    while(true){
        yield firstNum;
        let temp = secondNum;
        secondNum = firstNum + secondNum;
        firstNum = temp;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */