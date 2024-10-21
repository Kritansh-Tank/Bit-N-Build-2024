// backend/server.js
const express = require("express");
const { getJson } = require("serpapi");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const apiKey =
  "65886eb0faa9ae4a0d4fcd675bce9c88a4b42ae73037b6dae4568405851d948f"; // Replace with your actual API key

// POST endpoint to get directions
app.post("/api/getDirections", (req, res) => {
  const { startAddr, endAddr } = req.body;

  getJson(
    {
      engine: "google_maps_directions",
      start_addr: startAddr,
      end_addr: endAddr,
      api_key: apiKey,
    },
    (json) => {
      if (json.error) {
        console.error("Error fetching directions:", json.error);
        return res.status(500).send("Error fetching directions.");
      }
      res.json(json.directions);
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
