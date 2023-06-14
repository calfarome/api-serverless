
const AWS = require('aws-sdk');
const axios = require('axios');
const {v4} = require('uuid');


 async function createStarWarPeople(req, res) {

    // Instancio coneccion a db 
    const db = new AWS.DynamoDB.DocumentClient()
  
    // Modelo de datos
    let starWarPeople    
        
    try {
        // Consulto StarWar API(modelo People);
        const result = await axios.get("https://swapi.py4e.com/api/people/1/");

        // Mapeo atributos en español     
        starWarPeople = {
            id:v4(),
            año_nacimiento:result.data.birth_year,
            color_ojos:result.data.eye_color,
            pelicula:result.data.films,
            genero:result.data.gender,
            color_cabello:result.data.hair_color,
            altura:result.data.height,
            mundo_natal:result.data.homeworld,
            masa:result.data.mass,
            nombre:result.data.name,
            color_piel:result.data.skin_color,
            creado :result.data.created,
            editado :result.data.edited,
            especies :result.data.species,
            naves_estelares :result.data.starships,
            url :result.data.url,
            vehiculos :result.data.vehicles,
        }
    }
    catch (err) {
        console.log(err)
    }

    // Inserto a base de datos dynamodb
    await db.put({
        TableName:'StarWarPeopleTable',
        Item: starWarPeople
    }).promise();

    // Respuesta al cliente
    res.json({status: true, description: 'OK', data: starWarPeople});
};

async function getStarWaPeople(req, res) {

    // Instancia de db
    const db = new AWS.DynamoDB.DocumentClient()

    // Consulto tabla dynamodb
    const result = await db.scan({
        TableName: 'StarWarPeopleTable',
    }).promise();

    // Obtengo items
    let starWarPeople = result.Items;

    /// Respuesta al cliente
    res.json({ status: true, description: 'OK', data: starWarPeople });
};


module.exports = {getStarWaPeople,createStarWarPeople};

