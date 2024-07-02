const mongoose = require('mongoose');
require('dotenv').config(mongo_url)

const username = 'prod'; // substitua com seu nome de usuário
const password = '123'; // substitua com sua senha
const cluster = 'cluster0.hvuvfyq.mongodb.net'; // substitua com o seu cluster
const dbname = 'prod'; // substitua com o nome do seu banco de dados


async function conectaBanco() {
   try {
      
         console.log('Conexão com o banco de dados iniciou')

      await mongoose.connect(process.env.MONGO_URL);
     console.log('Conexão com o banco de dados feita com sucesso!');

   } catch (error) {
     console.error('Erro ao conectar com o banco de dados:', error);
   }
 }

module.exports = conectaBanco