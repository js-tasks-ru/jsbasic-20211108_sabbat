function getMinMax(str) {
  return str
    .split(' ')
    .map(item => isFinite(item) == true ? item  : ' ')
    .join('')
    .split(' ')
    .map(item => Number(item))
    .reduce(
      (acc, item) => {
        if (item < acc.min) {
          acc.min = item;
        }
        if (item > acc.max) {
          acc.max = item;
        }
        return acc;
      },
      { min: Infinity, max: -Infinity }
    );
}
