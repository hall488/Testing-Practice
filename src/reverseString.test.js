import reverseString from "./reverseString";

test("Parameter is string", () => {
  expect(() => {
    reverseString(3);
  }).toThrow(TypeError);
});

test("String returned backwards", () => {
  expect(reverseString("gopher")).toBe("rehpog");
});

test("Works with numbers", () => {
  expect(reverseString("5 more")).toBe("erom 5");
});
