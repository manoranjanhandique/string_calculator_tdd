const {add}=require('../src/stringCalculator')

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test("returns 1 when input is '1'", () => {
    expect(add("1")).toBe(1);
  });