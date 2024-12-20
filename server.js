const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Обслуживание статических файлов из папки "public"
app.use(express.static(path.join(__dirname, "public")));

// Главная страница
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Обработка 404 ошибки (страница не найдена)
app.use((req, res, next) => {
    res.status(404).send("404 - Страница не найдена.");
});

// Глобальная обработка ошибок
app.use((err, req, res, next) => {
    console.error("Ошибка сервера:", err.message);
    res.status(500).send("500 - Внутренняя ошибка сервера.");
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`);
});
