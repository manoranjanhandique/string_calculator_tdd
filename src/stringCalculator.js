const add = (numbers) => {
  if (numbers === "") return 0;
  const parts = numbers.split(",");

  if (parts.length === 1) {
    return parseInt(numbers);
  }

  return parseInt(parts[0]) + parseInt(parts[1]);
};
module.exports = { add };
