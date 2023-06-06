const axios = require('axios');
const soap = require('soap');

// Realizar una petición SOAP a la API de Marvel
async function makeMarvelSoapRequest() {
  const url = 'https://gateway.marvel.com/v1/public?wsdl';
  const client = await soap.createClientAsync(url);

  const args = {
    publicKey: 'TU_PUBLIC_KEY',
    privateKey: 'TU_PRIVATE_KEY'
  };

  client.describe().MarvelService.MarvelOperations.getCharacters({}, function (err, result) {
    if (err) {
      console.error('Error en la petición SOAP de Marvel:', err);
    } else {
      console.log('Resultado de la petición SOAP de Marvel:', result);
    }
  });
}

makeMarvelSoapRequest();

// Realizar una petición REST a la PokeAPI
async function makePokeApiRestRequest() {
  const restUrl = 'https://pokeapi.co/api/v2/pokemon/1';

  try {
    const response = await axios.get(restUrl);
    console.log('Respuesta de la petición REST a la PokeAPI:');
    console.log(response.data);
  } catch (error) {
    console.error('Error en la petición REST a la PokeAPI:', error);
  }
}

makePokeApiRestRequest();

// Realizar una petición REST a la API de SpaceX
async function makeSpaceXRestRequest() {
  const restUrl = 'https://api.spacexdata.com/v4/launches/latest';

  try {
    const response = await axios.get(restUrl);
    console.log('Respuesta de la petición REST a la API de SpaceX:');
    console.log(response.data);
  } catch (error) {
    console.error('Error en la petición REST a la API de SpaceX:', error);
  }
}

makeSpaceXRestRequest();