// npm install axios

const axios = require("axios");

axios
  .patch("http://localhost:3000/heros/4", {
    age: "jj22",
  })
  .then((e) => {
    console.log(e.data);
  })
  .catch((e) => {
    console.log(e);
  });
