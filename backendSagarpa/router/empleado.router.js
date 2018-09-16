const router = require('express').Router();

module.exports = (wagner) => {
    const empleadoCtrl = wagner.invoke((Empleado) =>
        require('../controllers/empleado.controller')(Empleado));

    //get para la petiicon delas gruas
    router.get('/', (req, res) =>
        empleadoCtrl.getAll(req, res));

    //get para obtener empleado por el estatus:activo (que actualmente laboran en servigruas.)
    router.get('/activo', (req, res) =>
        empleadoCtrl.getAllActive(req, res));

    //get para obtener choferes por el estatus:activo (que actualmente NO laboran en servigruas.)
    router.get('/inactivo', (req, res) =>
        empleadoCtrl.getAllInactive(req, res));

    //consultar por Id
    router.get('/:_id', (req, res) =>
        empleadoCtrl.getById(req, res));

    //
    router.post('/', (req, res) =>
        empleadoCtrl.create(req, res));

    router.put('/:_id', (req, res) =>
        empleadoCtrl.update(req, res));

    router.delete('/:_id', (req, res) =>
        empleadoCtrl.remove(req, res));
    return router;
};