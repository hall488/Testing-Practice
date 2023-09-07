const caesarCypher = (string, factor) => {
  if (typeof string !== "string") throw new TypeError();

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shift = alphabet.slice(factor % 26) + alphabet.slice(0, factor % 26);
  let cypher = "";

  for (let i = 0; i < string.length; i++) {
    if (/[^a-zA-Z]/.test(string[i])) {
      cypher += string[i];
      continue;
    }

    if (/[A-Z]/.test(string[i])) {
      cypher += shift[alphabet.indexOf(string[i].toLowerCase())].toUpperCase();
      continue;
    }

    cypher += shift[alphabet.indexOf(string[i])];
  }

  return cypher;
};

export default caesarCypher;
