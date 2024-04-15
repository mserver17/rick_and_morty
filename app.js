const express = require('express');
const path = require('path');

const app = express();

// Настройка статических файлов
app.use(express.static(path.join(__dirname, 'src/assets/style.css')));

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
