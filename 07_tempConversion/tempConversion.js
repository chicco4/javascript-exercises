
//[°C] = ([°F] − 32) × 5⁄9
const ftoc = function (n) {

  return Math.round(((n - 32) * (5 / 9)) * 10) / 10;
};

//[°F] = [°C] × 9⁄5 + 32
const ctof = function (n) {

  return Math.round(((n * (9 / 5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
