const { connectMysql } = require('../dbconnection');
class EntradaModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('entrada');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('entrada').where('id', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('entrada').insert(datos).returning('id');
        return result[0];
    }
}

module.exports = EntradaModel;