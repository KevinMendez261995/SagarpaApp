const router = require('express').Router();

module.exports = (wagner) => {
    const controlProducto = wagner.invoke((Productos) =>
        require('../controllers/productos.controller')(Productos));

    //get para la petiicon delas gruas
    router.get('/', (req, res) =>
        controlProducto.getAllProductos(req, res));

    //consultar por Id
    router.get('/:_id', (req, res) =>
        controlProducto.getById(req, res));

    //Crear un producto
    router.post('/', (req, res) =>
        controlProducto.create(req, res));

    router.put('/:_id', (req, res) =>
        controlProducto.update(req, res));

    router.delete('/:_id', (req, res) =>
        controlProducto.remove(req, res));
    return router;
};