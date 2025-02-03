require("dotenv").config();
const app = require("./src/app");
const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
  if (err) console.log(`Server Error : ${err}`);

  console.log(`Server listening on port : ${PORT}`);
});
