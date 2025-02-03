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
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < 0) {
      throw new Error(`negative numbers not allowed ${numArray[i]}`);
    }
  }

  return numArray.reduce((sum, num) => sum + num, 0);
};
module.exports = { add };
