module.exports = function toReadable (number) {
    let result = '';
    let stringNumber = number.toString();
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number <= 20){
        result = ones[number];
    }
    else if (number > 20 && number < 100 && stringNumber[1] != 0){
        result = `${tens[stringNumber[0]]} ${ones[stringNumber[1]]}`;
    }
    else if (number > 20 && number < 100 && stringNumber[1] == 0){
        result = `${tens[stringNumber[0]]}`;
    }
    else if (number >= 100){
        if(stringNumber[1] == 0 && stringNumber[2] != 0){
            result = `${ones[stringNumber[0]]} hundred ${ones[stringNumber[2]]}`;
        }
        else if(stringNumber[1] >= 1 && stringNumber[1] < 2){
            result = `${ones[stringNumber[0]]} hundred ${ones[stringNumber.slice(1)]}`;
        }
        else if(stringNumber[1] >= 2 && stringNumber[2] != 0){
            result = `${ones[stringNumber[0]]} hundred ${tens[stringNumber[1]]} ${ones[stringNumber[2]]}`
        }
        else if (stringNumber[0] >= 1 && stringNumber[1] == 0 && stringNumber[2] == 0){
            result = `${ones[stringNumber[0]]} hundred`;
        }
        else if(stringNumber[1] > 0 && stringNumber[2] == 0){
            result = `${ones[stringNumber[0]]} hundred ${tens[stringNumber[1]]}`;
        }
    }
    return result;
}   
console.log(module.exports(997));    
