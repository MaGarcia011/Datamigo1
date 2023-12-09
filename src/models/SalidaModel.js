const { connectMysql } = require('../dbconnection');
class SalidaModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('salida');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('salida').where('id', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('salida').insert(datos).returning('id');
        return result[0];
    }
}

module.exports = SalidaModel;