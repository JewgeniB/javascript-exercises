const ftoc = function(value) {
  //(32 °F − 32) × (5/9) = 0 °C
  return Math.round(((value -32) *5/9)*10)/10;
};

const ctof = function(value) {
  //32 °C × (9/5)) + 32 = 89,6 °F
  return Math.round((value * 9 / 5 +32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
