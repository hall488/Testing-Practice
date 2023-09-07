const analyzeArray = (array) => {
  const parameterCheck = () => {
    if (array.length == 0) throw new Error("Array size is zero");
  };

  const average = () => {
    parameterCheck();
    let sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
  };

  const min = () => {
    parameterCheck();
    return array.sort((a, b) => (a > b ? 1 : -1))[0];
  };

  const max = () => {
    parameterCheck();
    return array.sort((a, b) => (a < b ? 1 : -1))[0];
  };

  const length = () => array.length;

  return { average, min, max, length };
};

export default analyzeArray;
