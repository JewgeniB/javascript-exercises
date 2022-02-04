const leapYears = function(value) {
    if ((value % 400 == 0) || (value % 4 == 0 && value % 100 != 0)) {
        return true;
    } else {
        return false;        
    }
};

// Do not edit below this line
module.exports = leapYears;
