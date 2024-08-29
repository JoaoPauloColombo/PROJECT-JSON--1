//Nome , email e senha

const validateCliente = (req,res,next) => {
    const { nome,email,pedidos} =req.body;

    if(!nome || !email || !pedidos) {
        return res.status(400).json({
            msg:"Campos Invalidos",
        });
    }

    return next();
};

const validateClienteId = (req,res,next) => {
    const {id} = req.params;

    if(!id) {
        return res.status(400).json({
            msg:"Parametro faltando",
        });
    }

    return next();
};

module.exports = {validateCliente,validateClienteId};