import analyzeArray from "./analyzeArray";

let array = analyzeArray([5, 6, 7, 8, 9]);

test("Average test", () => {
  expect(array.average()).toBe(7);
});

test("Min test", () => {
  expect(array.min()).toBe(5);
});

test("Max test", () => {
  expect(array.max()).toBe(9);
});

test("Length test", () => {
  expect(array.length()).toBe(5);
});

test("Array is empty", () => {
  expect(() => {
    let array = analyzeArray([]);
    array.average();
  }).toThrow(Error);
});
