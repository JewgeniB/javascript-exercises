const removeFromArray = function(arr, ...num) {
    let count = num;

    for (const wert of num) {
        arr = arr.filter(function(value, num, arr){ 
    
            return value !== wert;
        }); 
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;