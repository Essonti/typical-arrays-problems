
exports.min = function min (array) {
  let result = array[0];
  if (array === ['']) {
  result = array.reduce((a,b) => a < b ? a : b);
  } else result = 0;
  return result;
}

exports.max = function max (array) {
  let result = array[0];
  if (array !== undefined) {
  result = array.reduce((a,b) => a > b ? a : b);
  } else result = 0;
  return result;
}

exports.avg = function avg (array) {
  let sum = 0;
for (let i = 0; i < array.length; i++) {
sum += array[i];
}
let result = sum / array.length;
return result;
}
