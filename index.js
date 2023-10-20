const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require("fs");
const bodyParser = require("body-parser");

app.use("/", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/heros", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    const dataToJs = JSON.parse(data);
    res.status(200).send(dataToJs);
  });
});

app.post("/addHero", (req, res) => {
  if (
    req.body.name !== "" &&
    req.body.age !== "" &&
    (req.body.gender.toLowerCase() === "male" ||
      req.body.gender.toLowerCase() === "female") &&
    !isNaN(req.body.age)
  ) {
    fs.readFile("data.json", "utf8", (err, data) => {
      const dataToJs = JSON.parse(data);
      dataToJs.push({
        id: dataToJs.length + 1,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
      });

      fs.writeFile("data.json", JSON.stringify(dataToJs), (err) => {
        console.log(err);
      });

      res
        .status(201)
        .send({ msg: "Your hero successfully added to the database." });
    });
  } else {
    res.status(400).send({
      error:
        "Age has to be a number. Gender has to be male or female. name can not be empty.",
    });
  }
});

app.delete("/heros/:id", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    const dataToJs = JSON.parse(data);

    if (dataToJs.findIndex((e) => e.id == req.params.id) !== -1) {
      const filterData = dataToJs.filter((e) => e.id != req.params.id);
      console.log(filterData);
      fs.writeFile("data.json", JSON.stringify(filterData), (err) => {
        console.log(err);
      });

      res.status(201).send({ msg: "Successfuly deleted." });
    } else {
      res.status(400).send({ error: "id does not exists" });
    }
  });
});

app.patch("/heros/:id", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    const dataToJs = JSON.parse(data);
    const findID = dataToJs.findIndex((e) => e.id == req.params.id);

    if (findID !== -1) {
      dataToJs[findID] = {
        id: dataToJs[findID].id,
        name: req.body.name ?? dataToJs[findID].name,
        age: req.body.age ?? dataToJs[findID].age,
        gender: req.body.gender ?? dataToJs[findID].gender,
      };

      fs.writeFile("data.json", JSON.stringify(dataToJs), (err) => {
        console.log(err);
      });

      res.status(201).send({ msg: "Successfuly updated." });
    } else {
      res.status(400).send({ error: "id does not exists" });
    }
  });
});

app.put("/heros/:id", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    const dataToJs = JSON.parse(data);
    const findID = dataToJs.findIndex((e) => e.id == req.params.id);

    if (findID !== -1) {
      dataToJs[findID] = {
        id: dataToJs[findID].id,
        name: req.body.name ?? dataToJs[findID].name,
        age: req.body.age ?? dataToJs[findID].age,
        gender: req.body.gender ?? dataToJs[findID].gender,
      };

      fs.writeFile("data.json", JSON.stringify(dataToJs), (err) => {
        console.log(err);
      });

      res.status(201).send({ msg: "Successfuly updated." });
    } else {
      if (
        req.body.name !== "" &&
        req.body.age !== "" &&
        (req.body.gender.toLowerCase() === "male" ||
          req.body.gender.toLowerCase() === "female") &&
        !isNaN(req.body.age)
      ) {
        dataToJs.push({
          id: dataToJs.length + 1,
          name: req.body.name,
          age: req.body.age,
          gender: req.body.gender,
        });

        fs.writeFile("data.json", JSON.stringify(dataToJs), (err) => {
          console.log(err);
        });

        res.status(201).send({ msg: "Successfuly created." });
      } else {
        res.status(400).send({
          error:
            "Age has to be a number. Gender has to be male or female. name can not be empty.",
        });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
