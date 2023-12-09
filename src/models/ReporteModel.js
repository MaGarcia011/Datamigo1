const { connectMysql } = require('../dbconnection');
class ReporteModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('reportes');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('reportes').where('id', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('reportes').insert(datos).returning('id');
        return result[0];
    }
}

module.exports = ReporteModel;