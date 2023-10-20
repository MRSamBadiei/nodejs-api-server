const axios = require("axios");

axios
  .put("http://localhost:3000/heros/2", {
    name: "sam",
    age: 10,
    gender: "male",
  })
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log(e);
  });
