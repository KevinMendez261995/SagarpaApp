const router = require('express').Router();

module.exports = (wagner) => {
    const controlNoticia = wagner.invoke((Noticias) =>
        require('../controllers/noticias.controller')(Noticias));

    //get para la petiicon delas gruas
    router.get('/', (req, res) =>
        controlNoticia.getAllNoticias(req, res));

    //consultar por Id
    router.get('/:_id', (req, res) =>
        controlNoticia.getById(req, res));

    //
    router.post('/', (req, res) =>
        controlNoticia.create(req, res));

    router.put('/:_id', (req, res) =>
        controlNoticia.update(req, res));

    router.delete('/:_id', (req, res) =>
        controlNoticia.remove(req, res));
    return router;
};