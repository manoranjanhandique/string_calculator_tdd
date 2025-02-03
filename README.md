# String Calculator (TDD Kata)

This is a simple implementation of a **String Calculator** using **Test-Driven Development (TDD)**. The calculator takes a string of numbers separated by commas, newlines, or custom delimiters, and returns the sum of those numbers. It also handles various edge cases like negative numbers, numbers greater than 1000, and custom delimiters.

### Features

-  **Empty String**: If the input string is empty, it returns 0.
- **Single Number**: If there is a single number, it returns that number.
- **Multiple Numbers**: Handles multiple numbers separated by commas or newlines.
- **Custom Delimiters**: Supports custom delimiters defined by the user in the format `//[delimiter]\n[numbers]`.
- **Negative Numbers**: Throws an error if negative numbers are provided, with the message listing all negative numbers.
- **Ignore Numbers Greater Than 1000**: Numbers greater than 1000 are ignored in the sum.
- **Multiple Delimiters**: Supports multiple delimiters, including multi-character delimiters.

#### Installation

1. **Clone this repository:**

   ```
   https://github.com/manoranjanhandique/string_calculator_tdd.git
   ```

2. **Navigate to the project directory:**

   ```
   cd string-calculator-tdd
   ```

3. **Install dependencies:**

   ```
   npm install
   ```

   

## Usage

### Running the Tests

The project uses **Jest** for testing. You can run the tests using the following command:

```
npm test
```

This will run all the tests in the `__tests__` folder.

### Example Usage

The `add` function can be used like this:

```
const add = require('./stringCalculator');

console.log(add(""));         // 0
console.log(add("1"));        // 1
console.log(add("1,2,3"));    // 6
console.log(add("//[***]\n1***2***3"));  // 6
console.log(add("//[&&&][%%%]\n1&&&2%%%3"));  // 6
```

### Test Cases

#### Test Case 1: Empty String

- **Input**: `""`
- **Expected Output**: `0`

#### Test Case 2: Single Number

- **Input**: `"1"`
- **Expected Output**: `1`

#### Test Case 3: Multiple Numbers (Comma-separated)

- **Input**: `"1,2,3"`
- **Expected Output**: `6`

#### Test Case 4: Multiple Numbers (Newline-separated)

- **Input**: `"1\n2\n3"`
- **Expected Output**: `6`

#### Test Case 5: Custom Delimiters

- **Input**: `"//[***]\n1***2***3"`
- **Expected Output**: `6`

#### Test Case 6: Multiple Custom Delimiters

- **Input**: `"//[&&&][%%%]\n1&&&2%%%3"`
- **Expected Output**: `6`

#### Test Case 7: Negative Numbers (Throws Error)

- **Input**: `"1,-2,3,-4"`
- **Expected Output**: `Error: Negative numbers not allowed -2,-4`

#### Test Case 8: Ignore Numbers Greater Than 1000

- **Input**: `"1001,2"`
- **Expected Output**: `2`

## Project Structure

- `stringCalculator.js`: Contains the implementation of the string calculator.
- `__tests__/stringCalculator.test.js`: Contains all the test cases.
- `package.json`: Contains dependencies and scripts.
- `index.js` : Server config

## Conclusion

This project demonstrates my approach to solving problems using **Test-Driven Development (TDD)**. I focus on writing small, incremental tests and refactoring my code after each step to ensure correctness and maintainability.