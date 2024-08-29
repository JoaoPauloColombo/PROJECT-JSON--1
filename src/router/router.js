const { Router } = require("express");
const userRoutes = require("./routerUser")
const prodRoutes = require("./routerProd")
const clientesRoutes = require("./routerCliente");
const UserController = require("../controller/UserController");
const authenticateToken = require("../middlewares/authenticateToken")


const router = Router();

router.use('/user', userRoutes);
router.use('/prod', prodRoutes);
router.use('/cliente', clientesRoutes);


router.post ('/login', (req,res) =>{
    UserController.login(req,res)
});


module.exports = router;