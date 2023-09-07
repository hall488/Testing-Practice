import capitalize from "./capitalize";

test("Parameter is string", () => {
  expect(() => {
    capitalize(3);
  }).toThrow(TypeError);
});

test("String contains numbers", () => {
  expect(() => {
    capitalize("4ases");
  }).toThrow(Error);
});

test("First letter is capitalized", () => {
  expect(capitalize("frog")).toBe("Frog");
});

test("Only uppercase first letter in a phrase", () => {
  expect(capitalize("dog went for walk")).toBe("Dog went for walk");
});
