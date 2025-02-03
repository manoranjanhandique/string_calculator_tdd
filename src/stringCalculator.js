const add = (numbers) => {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/;

  if (numbers.slice(0, 2) === "//") {  
    const parts = numbers.split("\n");
    delimiter = parts[0].substring(2); 
    numbers = parts[1]; 
  }

  const numArray = numbers.split(delimiter);

  return numArray
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
};
module.exports = { add };
