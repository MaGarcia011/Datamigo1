const { connectMysql } = require('../dbconnection');
class UsuarioModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('usuarios');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('usuarios').where('id', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('usuarios').insert(datos).returning('id');
        return result[0];
    }
}

module.exports = UsuarioModel;