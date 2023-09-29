const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { addUser, getUser, getUsers } = require("./utils/dbCalls");
const { calculateCommonTimes } = require("./utils/getResults");

const fs = require("fs");
// const { body, validationResult } = require("express-validator");

const app = express();
const port = 80;

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs"); // register the template engine
app.set("views", "./views"); // specify the views directory

app.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.render("index", {users});
  } catch (err) {
    res.send("Failed to load the main site. Fuck you I guess");
  }
});

app.get("/:userName", async (req, res) => {
  try {
    const userData = await getUser(req.params.userName);
    const commonTimes = await calculateCommonTimes(userData);
    res.render("results", { name: userData.name, commonTimes });
  } catch (err) {
    res.send("Error, user not found.");
  }
});

app.post("/", jsonParser, async (req, res) => {
  try {
    if(req.body.name && /^[A-Za-z\s]+$/.test(req.body.name)) {
      await addUser(req.body);
      res.redirect("/" + req.body.name);
    } else throw new Error('Incorrect name. Try again');
  } catch (err) {
    res.send("Failed to add user:", err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
