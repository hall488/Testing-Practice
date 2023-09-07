const calculator = () => {
  const parameterCheck = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") throw new TypeError();
  };

  const add = (a, b) => {
    parameterCheck(a, b);
    return a + b;
  };

  const subtract = (a, b) => {
    parameterCheck(a, b);
    return a - b;
  };

  const multiply = (a, b) => {
    parameterCheck(a, b);
    return a * b;
  };

  const divide = (a, b) => {
    parameterCheck(a, b);
    return a / b;
  };

  return { add, subtract, multiply, divide };
};

export default calculator;
