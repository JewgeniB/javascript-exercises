const sumAll = function(val1, val2) {
    let count = 0;

    if (typeof val1 != typeof val2 || val1 <0 || val2 < 0) {
        return "ERROR"
    } else if (val1 < val2) {
        for (let i = val1; i <= val2 ; i++) {
            count = count + i;
        }      
    } else {
        for (let i = val2; i <= val1 ; i++) {
            count = count + i;
        }
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
