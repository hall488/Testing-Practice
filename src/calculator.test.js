import calculator from "./calculator";

let calc = calculator();

test("Add functions works", () => {
  expect(calc.add(3, 4)).toBe(7);
});

test("Subtract functions works", () => {
  expect(calc.subtract(3, 4)).toBe(-1);
});

test("Mulitply functions works", () => {
  expect(calc.multiply(3, 4)).toBe(12);
});

test("Divide functions works", () => {
  expect(calc.divide(8, 4)).toBe(2);
});

test("Double check function math", () => {
  expect(
    calc.add(calc.multiply(5, 2), calc.divide(calc.subtract(4, 1), 5)),
  ).toBe(10.6);
});

test("Add parameters are numbers", () => {
  expect(() => {
    calc.add(1, "farple");
  }).toThrow(TypeError);
});

test("Subtract parameters are numbers", () => {
  expect(() => {
    calc.subtract(1, "farple");
  }).toThrow(TypeError);
});

test("Multiply parameters are numbers", () => {
  expect(() => {
    calc.multiply(1, "farple");
  }).toThrow(TypeError);
});

test("Divide parameters are numbers", () => {
  expect(() => {
    calc.divide(1, "farple");
  }).toThrow(TypeError);
});
