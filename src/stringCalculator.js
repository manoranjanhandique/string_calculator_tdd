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
        .map((d) => d.slice(1, -1))
        .map((d) => d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'))
        .join("|");
    } else {
      delimiter = delimiterLine;
    }
    numbers = parts.slice(1).join("\n");
  }

  const numArray = numbers.split(new RegExp(delimiter)).map(Number);

  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray.filter((num) => num <= 1000).reduce((sum, num) => sum + num, 0);
};

module.exports = { add };
