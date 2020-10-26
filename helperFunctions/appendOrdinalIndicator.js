export var appendOrdinalIndicator = num => {
    let numString = num ? num.toString() : '';

    let lastDigit = numString[numString.length - 1];
    let penultimateDigit = numString[numString.length - 2];

    let lastTwoDigits = penultimateDigit + lastDigit;

    if (isNaN(lastDigit)) {
        return 'Not a Number';
    }
    switch (lastTwoDigits) {
        case '11':
            numString += 'th';
            break;
        case '12':
            numString += 'th';
            break;
        case '13':
            numString += 'th';
            break;
        default:
            switch (lastDigit) {
                case '1':
                    numString += 'st';
                    break;
                case '2':
                    numString += 'nd';
                    break;
                case '3':
                    numString += 'rd';
                    break;
                default:
                    numString += 'th';
            }
    }
    return numString || '';
}