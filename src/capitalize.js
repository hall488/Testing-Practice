const capitalize = (string) => {
  if (typeof string !== "string") throw new TypeError();
  if (!/^([^0-9]*)$/.test(string))
    throw new Error("String cannot contain numbers");

  return string[0].toUpperCase() + string.slice(1);
};

export default capitalize;
