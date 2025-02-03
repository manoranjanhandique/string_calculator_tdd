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

  const numArray = numbers.split(delimiter).map(Number);

  const negatives = numArray.filter(num => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
};

module.exports = { add };
