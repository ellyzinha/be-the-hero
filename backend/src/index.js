const express = require("express");
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos Http:
 * 
 * GET: Buscar uma informação no backend
 * POST:Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

 /**
  * 
  * Tipos de parâmetros:
  * 
  * Query: Parâmetros nomeados enviados na rota após o "?" (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para indentificar recursos.
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

  /**
   * SQL: Mysql, SQlite, PostgreSql, Oracle, Microsoft SQL server
   * NoSql: MongoDB, CouchDB, etc.
   */

   /**
    * 
    * Driver: SELECT * FROM user
    * Query Builder: table('users').select('*').where()
    * Knex.js > Query Builder Usado no omnistack
    */


app.listen(3333);