"use strict";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { myLogger, makeItem } from "./helpers.js";

const port = process.env.PORT || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "../public/");

let items = [
  makeItem({ text: "my first task", editing: false, v: 0, priority: 9 }),
];
console.log(items);

const app = express();
app.use(myLogger);
app.use(express.json());
app.use(express.static(dir));

app.listen(port, (err) => {
  if (!err) {
    console.log(`server running on port ${port}`);
  } else {
    console.log(err);
  }
});

app.get("/read", (_, res) => {
  res.json(items);
});
