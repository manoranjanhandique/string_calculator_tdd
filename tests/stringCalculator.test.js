const {add}=require('../src/stringCalculator')

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test("returns 1 when input is '1'", () => {
    expect(add("1")).toBe(1);
  });

  test("returns sum of two numbers separated by a comma", () => {
    expect(add("1,5")).toBe(6);
  });

  test("returns sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("handles new lines as delimiters along with commas", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter defined at the beginning", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("supports custom delimiter with a different character", () => {
    expect(add("//|\n2|3|4")).toBe(9);
  });
  