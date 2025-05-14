import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/heroes", async (req, res) => {
  try {
    const response = await axios.get("https://dota2protracker.com/api/heroes/list");
    res.json(response.data);
  } catch (error) {
    console.error("Ошибка при получении героев:", error.message);
    res.status(500).json({ error: "Не удалось получить героев" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
