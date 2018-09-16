const router = require('express').Router();

module.exports = (wagner) => {
    const loginCtrl = wagner.invoke((Empleado) => 
        require('../controllers/login.controller')(Empleado));

        router.post('/empleado', (req, res) =>
        loginCtrl.loginEmpleado(req, res));
        

    return router;
};