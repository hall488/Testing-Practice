const reverseString = (string) => {
  if (typeof string !== "string") throw new TypeError();

  let reverse = "";

  for (let i = 0; i < string.length; i++) {
    reverse = string[i] + reverse;
  }
  return reverse;
};

export default reverseString;
