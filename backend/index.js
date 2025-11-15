import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const API_KEY = "88a42602c2c7434a9c296749791a7f05";

app.get("/news", async (req, res) => {
    const search = req.query.q || "bitcoin";

    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data.articles);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
