const express = require("express");
const app = express();
const fetch = import("node-fetch");

const { OpenAIApi } = require("openai");
const cors = require("cors");
app.use(cors());
const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
app.use(express.json());
const API_KEY = "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";
const path = require("path"); // Import the 'path' module to work with file paths

// Serve static files in the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/chat", (req, res) => {
  // Serve chat.html from the public directory
  res.sendFile(path.join(__dirname, "public", "chat.html"));
});

app.get("/image", (req, res) => {
  // Serve image.html from the public directory
  res.sendFile(path.join(__dirname, "public", "image.html"));
});

app.get("/index.html", (req, res) => {
  // Serve index.html from the public directory
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/", (req, res) => {
  // Serve index.html from the public directory
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/menu", (req, res) => {
  // Serve menu.html from the public directory
  res.sendFile(path.join(__dirname, "public", "menu.html"));
});

app.get("/cart", (req, res) => {
  // Serve cart.html from the public directory
  res.sendFile(path.join(__dirname, "public", "cart.html"));
});

app.get("/order", (req, res) => {
  // Serve orders.html from the public directory
  res.sendFile(path.join(__dirname, "public", "orders.html"));
});

app.post("/generate-image", async (req, res) => {
  try {
    const { message } = req.body;

    // You can make a request to the OpenAI API here to generate the image based on the user's message.
    // Replace the following lines with code to generate the image.
    const canvas = createCanvas(600, 400); // Adjust the dimensions as needed
    const ctx = canvas.getContext("2d");
    ctx.font = "36px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(message, canvas.width / 2, canvas.height / 2);
    const dataURL = canvas.toDataURL("image/png");

    // Respond with the image data URL
    res.json({ imageUrl: dataURL });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/generate", async (req, res) => {
  const { message } = req.body;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message },
      ],
    }),
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json();
    res.json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
