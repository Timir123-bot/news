export default async function handler(req, res) {
  const API_KEY = "88a42602c2c7434a9c296749791a7f05";

  const search = req.query.q || "bitcoin";
  const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.articles || []);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
