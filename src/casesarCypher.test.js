import caesarCypher from "./casesarCypher";

test("Parameter is string", () => {
  expect(() => {
    caesarCypher(3);
  }).toThrow(TypeError);
});

test("Alphabet test factor 1", () => {
  expect(caesarCypher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza",
  );
});

test("Alphabet test factor 4", () => {
  expect(caesarCypher("abcdefghijklmnopqrstuvwxyz", 4)).toBe(
    "efghijklmnopqrstuvwxyzabcd",
  );
});

test("Alphabet test factor 26", () => {
  expect(caesarCypher("abcdefghijklmnopqrstuvwxyz", 26)).toBe(
    "abcdefghijklmnopqrstuvwxyz",
  );
});

test("Case stays in place", () => {
  expect(caesarCypher("Chicago chicago", 1)).toBe("Dijdbhp dijdbhp");
});

test("Punctuation stays in place", () => {
  expect(caesarCypher("The dog, Charlie, is a very good boy!", 1)).toBe(
    "Uif eph, Dibsmjf, jt b wfsz hppe cpz!",
  );
});
