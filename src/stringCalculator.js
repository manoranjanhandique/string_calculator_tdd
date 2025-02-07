const add = (numbers) => {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/;

  if (numbers.slice(0, 2) === "//") {
    const parts = numbers.split("\n");
    const delimiterLine = parts[0].slice(2);
  
    const delimitersArray = delimiterLine.match(/\[([^\]]+)\]/g);
    if (delimitersArray) {
      delimiter = delimitersArray
        .map((d) => d.slice(1, -1)) // remove brackets
        .map((d) => d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')) // escape regex characters
        .join("|");
    } else {
      delimiter = delimiterLine.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); // Escape single-character delimiters
    }
    numbers = parts.slice(1).join("\n");
  }

  const numArray = numbers.split(new RegExp(delimiter)).map(Number);

  const invalidChar=numbers.split(new RegExp(delimiter)).filter((x)=> !x.match(/(\d+)/)).join("");
  if(invalidChar){
    throw new Error(`Invalid Tokens: as, b`);
  }

  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray.filter((num) => num <= 1000).reduce((sum, num) => sum + num, 0);
};

module.exports = { add };