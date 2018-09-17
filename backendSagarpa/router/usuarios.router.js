const router = require('express').Router();

module.exports = (wagner) => {
    const controlUsuario = wagner.invoke((Usuarios) =>
        require('../controllers/usuarios.controller')(Usuarios));

    //get para la petiicon delas gruas
    router.get('/', (req, res) =>
        controlUsuario.getAllUsuarios(req, res));

    //get para obtener empleado por el estatus:activo (que actualmente laboran en servigruas.)
    router.get('/agropecuarios', (req, res) =>
        controlUsuario.getAllAgropecuarios(req, res));

    //get para obtener empleado por el estatus:activo (que actualmente laboran en servigruas.)
    router.get('/ganaderos', (req, res) =>
        controlUsuario.getAllGanaderos(req, res));

    //get para obtener empleado por el estatus:activo (que actualmente laboran en servigruas.)
    router.get('/agricultores', (req, res) =>
        controlUsuario.getAllAgricultores(req, res));

    //consultar por Id
    router.get('/:_id', (req, res) =>
        controlUsuario.getById(req, res));

    //
    router.post('/', (req, res) =>
        controlUsuario.create(req, res));

    router.put('/:_id', (req, res) =>
        controlUsuario.update(req, res));

    router.delete('/:_id', (req, res) =>
        controlUsuario.remove(req, res));
    return router;
};