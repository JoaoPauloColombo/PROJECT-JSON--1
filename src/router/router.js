const { Router } = require("express");
const UserController = require("../controller/UserController");
const ProdController = require("../controller/ProdController")

const router = Router();

//Configuração da Rotas (CRUD)

router.post('/user/',(req,res) => {
    UserController.create(req,res)
});
router.put('/user/:id',(req,res) => {
    UserController.update(req,res)
});
router.get('/user/',(req,res) => {
    UserController.getAll(req,res)
});
router.get('/user/:id',(req,res) => {
    UserController.getOne(req,res)
});
router.delete('/user/:id',(req,res) => {
    UserController.delete(req,res)
});


router.post('/prod/',(req,res) => {
    ProdController.create(req,res)
});

router.put('/prod/:id',(req,res) => {
    ProdController.update(req,res)
});
router.get('/prod/',(req,res) => {
    ProdController.getAll(req,res)
});
router.get('/prod/:id',(req,res) => {
    ProdController.getOne(req,res)
});
router.delete('/prod/:id',(req,res) => {
    ProdController.delete(req,res)
});

module.exports = router;