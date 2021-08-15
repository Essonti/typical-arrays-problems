
exports.min = function min (array) {
  let result = 0;
  if (arguments[0] != undefined && arguments[0] != ('')) {
   result = Math.min(...array);
  //result = array.reduce((a,b) => {a < b ? a : b}, array[0]);
 }
  return result;
}

exports.max = function max (array) {
  let result = 0;
  if (arguments[0] != undefined && arguments[0] != ('')) {
  result = array.reduce((a,b) => a > b ? a : b);
  };
  return result;
}

exports.avg = function avg (array) {
  let sum = 0, 
	result = 0;
  if (arguments[0] != undefined && arguments[0] != ('')) {
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    };
    result = sum / array.length;
};
return result;
}
