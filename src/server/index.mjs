import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import mockAPIResponse from "./mockAPI.js";
import cors from "cors";

// Start up an instance of app
const app = express();

// Cors allows the browser and server to communicate without any security interruptions
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);
let urlInput = [];

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/add-url", async function (req, res) {
  urlInput = req.body.url;
  const apiURL = `${baseURL}key=${apiKey}&url=${urlInput}&lang=en`;
  const response = await fetch(apiURL);
  const data = await response.json();
  console.log(data);
  res.send(data);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, (err) => {
  if (err) throw new Error(err);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
