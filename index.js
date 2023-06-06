const axios = require('axios');


//  REST a PokeAPI
 async function PokeApiRest() {
  const restUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

  try {
    const response = await axios.get(restUrl);
    console.log('Respuesta de PokeAPI');
    console.log(response.data);
  } catch (error) {
    console.error( error);
    console.error('Error PokeAPI');
  }
}

PokeApiRest();

// REST a SpaceX
 async function SpaceXRest() {
  const restUrl = 'https://api.spacexdata.com/v4/launches/latest';

  try {
    const response = await axios.get(restUrl);
    console.log('Respuesta SpaceX');
    console.log(response.data);
    axios.send(response.data);
  } catch (error) {
    console.error(error);
    console.error('Error SpaceX');
  }
}

SpaceXRest();

