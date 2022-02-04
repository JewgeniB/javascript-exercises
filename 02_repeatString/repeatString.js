const repeatString = function(wort, zahl) {
    let wort2 = "";

    if (zahl < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < zahl; i++) {
            wort2 = wort2 + wort;
        }
    
        return wort2;
    }

};

// Do not edit below this line
module.exports = repeatString;
