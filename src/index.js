// You should implement your task here.

module.exports = function towelSort(matrix) {
  let towelArray = [];
  if(matrix == undefined || matrix.length == 0) return towelArray;
  matrix.forEach((item, i) => {
      if(i % 2 == 0 ) towelArray.push(...item);
      if(i % 2 > 0)  towelArray.push(...(item.reverse()));
  });
  return towelArray;
};
