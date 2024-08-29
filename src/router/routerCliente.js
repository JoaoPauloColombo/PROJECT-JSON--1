const {Router} = require("express");
const ClienteController = require("../controller/ClienteController")
const { validateCliente,validateClienteId } = require("../middlewares/ValidateCliente");

const router = Router();

router.post('/',validateCliente,(req,res) => {
    ClienteController.create(req,res)
});
router.put('/:id',validateCliente,validateClienteId,(req,res) => {
    ClienteController.update(req,res)
});
router.get('/',(req,res) => {
    ClienteController.getAll(req,res)
});
router.get('/:id',validateClienteId,(req,res) => {
    ClienteController.getOne(req,res)
});
router.delete('/:id',validateClienteId,(req,res) => {
    ClienteController.delete(req,res)
});

module.exports = router;