
exports.min = function min (array) {
  if (array == undefined || array == []) return 0;
  array = array.sort(function(a, b) { return a - b; });
  return array[0] || 0;
}

exports.max = function max (array) {
  if (array == undefined) return 0;
  array = array.sort(function(a, b) { return a - b; });
  return array[array.length-1] || 0;
}

exports.avg = function avg (array) {
  if (array == undefined) return 0;
  array = array.sort(function(a, b) { return a - b; });
  let average = array.reduce((sum, current) => sum + current, 0)/array.length;;
  return average || 0;
}

