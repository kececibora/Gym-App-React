const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const { json } = require("body-parser");
const { nanoid } = require("nanoid");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(json());

let admin = [
  {
    id: nanoid(2),
    user: "Bora",
    pass: "123",
  },
  {
    id: nanoid(2),
    user: "Berk",
    pass: "123",
  },
];

let todos = [
  {
    id: nanoid(6),
    title: "bacak",

    tip: "bacak",
  },
  {
    id: nanoid(6),
    title: "gögüs",

    tip: "gögüs",
  },
  {
    id: nanoid(6),
    title: "sırt",

    tip: "sırt",
  },
  {
    id: nanoid(6),
    title: "kol",
    tip: "sırt",
  },
  {
    id: nanoid(6),
    title: "pazı",
    tip: "sırt",
  },
];

app.get("/todos", (req, res) => res.send(todos));
app.get("/admin", (req, res) => res.send(admin));

app.post("/todos", (req, res) => {
  const todo = { title: req.body.title, id: nanoid(), completed: false };
  todos.push(todo);
  return res.send(todo);
});

app.patch("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  const completed = Boolean(req.body.completed);
  if (index > -1) {
    todos[index].completed = completed;
  }
  return res.send(todos[index]);
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index > -1) {
    todos.splice(index, 1);
  }

  res.send(todos);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
