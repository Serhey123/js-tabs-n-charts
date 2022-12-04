const getAverage = numbers => {
  const sum = numbers.reduce((acc, number) => acc + +number, 0);
  const length = numbers.length;
  return (sum / length).toFixed(1);
};

export default getAverage;
