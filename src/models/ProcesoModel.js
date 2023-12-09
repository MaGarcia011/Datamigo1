const { connectMysql } = require('../dbconnection');
class ProcesoModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('proceso');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('proceso').where('id', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('proceso').insert(datos).returning('id');
        return result[0];
    }
}

module.exports = ProcesoModel;