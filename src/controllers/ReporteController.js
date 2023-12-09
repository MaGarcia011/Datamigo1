const ReporteModel = require('../models/ReporteModel');

class ReporteController
{
    /**
     * Recupera una colección de valores de un recurso:
     * 
     * ```http
     *   GET /reportes
     *   Accept: application/json
     * ```
     */
    static async indexGet(req, res) {
        let data = await ReporteModel.consultar();
        res.send(data);
    }

    /**
     * Recibe una petición para crear un recurso:
     * 
     * ```http
     *   POST /reportes
     *   Content-Type: application/json
     *
     *   {"materia _prima":"Madera"}
     * ```
     */
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await ReporteModel.insertar(newData);

            res.status(201)
                .header('Location', `/reportes/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    /**
     * Recupera el valor de un recurso individual:
     * 
     * ```http
     *   GET /reportes/{id}
     *   Accept: application/json
     * ```
     */
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await ReporteModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }



}

module.exports = ReporteController;