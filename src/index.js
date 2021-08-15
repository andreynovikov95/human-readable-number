module.exports = function toReadable (number) {
    const firstTen = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
    };

    const secondTen = {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
        0: 'twenty',
    };

    const thirdTen = {
    	1: 'ten',
    	2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    if (number >= 0 && number <= 10) {
        return firstTen[number];
    };

    const unit = number % 10;
    if (number > 10 && number < 21) {
    	return secondTen[unit];
    };

    const ten = Math.floor(number / 10 % 10);
    if (number > 20 && number < 100) {
    	if (unit === 0) {
    		return thirdTen[ten];
    	} else {
    		return thirdTen[ten] + " " + firstTen[unit];
    	};
    };

    const hundred = Math.floor(number / 100);
    if (number > 99 && number < 1000) {
    	if (unit === 0 && ten === 0) {
    		return firstTen[hundred] + " hundred";
        }

    	if (unit === 0) {
            return firstTen[hundred] + " hundred " + thirdTen[ten];
        }

        if (unit === 0 && ten == 1) {
            return firstTen[hundred] + " hundred ten";
        }

        if (ten == 1) {
            return firstTen[hundred] + " hundred " + secondTen[unit];
        }

    	if (ten === 0) {
    		return firstTen[hundred] + " hundred " + firstTen[unit];
        }
    	
        return firstTen[hundred] + " hundred " + thirdTen[ten] + " " + firstTen[unit];
    }
}
