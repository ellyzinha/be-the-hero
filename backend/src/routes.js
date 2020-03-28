const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//Listagem de Ongs
routes.get('/ongs', OngController.index);
//Cadastro de Ongs
routes.post('/ongs', OngController.create);

//Listar casos especificos buscando pelo id da ong
routes.get('/profile', ProfileController.index);

//Cadastro de Incidents
routes.post('/incidents', IncidentController.create);  
//Listagem de Incidents
routes.get('/incidents', IncidentController.index);
//Delete Incidents
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;