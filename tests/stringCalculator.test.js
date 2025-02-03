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

  test("throws an error when a negative number is passed", () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed -2");
  });

  test("throws an error when multiple negative numbers are passed", () => {
    expect(() => add("1,-2,-3,4,-5")).toThrow("Negative numbers not allowed -2,-3,-5");
  });

  test("numbers greater than 1000 are ignored in the sum", () => {
    expect(add("2,1001")).toBe(2);
  });

  test("handles delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });
  
  test("handles multiple delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6); 
  });
  