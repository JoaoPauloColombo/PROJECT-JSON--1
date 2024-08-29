const {Router} = require("express");
const ProdController = require("../controller/ProdController");
const { validateProd, validateProdId } = require("../middlewares/ValidateProd");

const router = Router();

router.post('/',validateProd,(req,res) => {
    ProdController.create(req,res)
});
router.put('/:id',validateProd,validateProdId,(req,res) => {
    ProdController.update(req,res)
});
router.get('/',(req,res) => {
    ProdController.getAll(req,res)
});
router.get('/:id',validateProdId,(req,res) => {
    ProdController.getOne(req,res)
});
router.delete('/:id',validateProdId,(req,res) => {
    ProdController.delete(req,res)
});

module.exports = router;