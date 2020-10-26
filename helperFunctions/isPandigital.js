export var isPanDigital = (num) => {
    let stringifiedNum = num.toString().split("");
    let numDict = {};

    stringifiedNum.forEach(digit => {
        numDict[digit] = true;
    });

    for (let i = 0; i < 10; i++) {
        if (!numDict.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}