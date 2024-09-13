require('dotenv').config();
const express = require("express");
const router = require("./router/router");
const sequelize = require("./config/config");

const User = require("./models/User");
const Prod = require("./models/Prod");
const Cliente = require("./models/Cliente");
const routerUpload = require('./router/routerUpload');

var cors = require('cors');

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  next();
});
//Modelo da API JSON
app.use(express.json());
app.use("/api", router);
app.use('/api/image', routerUpload);

app.get("/healthcheck", (req, res) => {
  // 200 significa que está ok o servidor
  return res.status(200).json({
    msg: "Estamos vivos",
    alive: true,
  });
});

sequelize
  .authenticate()
  .then(async () => {
    console.log("Conexão estabelecida com sucesso");
    await sequelize.sync(); //Sincroniza o codigo com a tabela
  })
  .then(() => {
    app.listen(process.env.PORT == null ? 8080 : process.env.PORT, () => {
      console.log("Rodando na porta 8080");
    });
  })
  .catch((error) => { 
    console.error("Erro ao se conectar com o banco", error);
  });
