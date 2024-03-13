const express = require("express");

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { messages });
});

router.get("/new", (req, res, next) => [
  res.render("form", { title: "Mini Message board", messages }),
]);

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
