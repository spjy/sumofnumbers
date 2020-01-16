// 24:17

const sumFor = (list) => {
  let sum = 0;

  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }

  return sum;
};

const sumWhile = (list) => {
  let sum = 0;
  let i = 0;

  while (i !== list.length) {
    sum += list[i];
    i++;
  }

  return sum;
};

const sumRecursion = (list) => {
  if (list.length === 0) {
    return 0;
  }

  return list[0] + sumRecursion(list.slice(1));
};

const sumSimpleWay = (list) => _.reduce(list, (memo, el) => memo + el, 0);

console.log(sumFor([1, 2]), sumWhile([1, 2]), sumRecursion([1, 2]), sumSimpleWay([1, 2]))
