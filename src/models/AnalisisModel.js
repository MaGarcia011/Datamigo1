const { connectMysql } = require('../dbconnection');
class AnalisisModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('analisis');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('analisis').where('id', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('analisis').insert(datos).returning('id');
        return result[0];
    }
}

module.exports = AnalisisModel;