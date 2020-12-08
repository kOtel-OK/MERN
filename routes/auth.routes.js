const {Router} = require("express");
const User = require('../models/User.model');
const router = Router();

//обрабатываем post запросы /api/auth +
// Эндпоинт выполняют конкретную задачу, принимают параметры и возвращают данные Клиенту
router.post('/register', async (req, res) => {
  try {                   //ассинхронные запросы обрабатываем блоками try catch - хорошая практика
    const {email, password} = req.body; //деструктуризация
  } catch (error) {
    res.status(500).json({message: "Что-то не работает"});
  }
})

router.post('/login', async (req, res) => {

})

module.exports = router;