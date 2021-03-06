
exports.min = function min (array) {
  if(!array || !array.length) return 0;

  return Math.min(...array);
}

exports.max = function max (array) {
    if(!array || !array.length) return 0;

    return Math.max(...array);
}

exports.avg = function avg (array) {
  if(!array || !array.length) return 0;

  return array.reduce((avg, item) => avg + item, 0) / array.length;
}
