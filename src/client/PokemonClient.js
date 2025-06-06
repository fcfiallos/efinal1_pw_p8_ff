import axios from 'axios';

const consumirAPI = async (id) =>{
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.data);
    return respuesta;
}

function obtenerRandomId (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerPokemon= async (id) =>{
    const data = await consumirAPI(id);
    const pokemon={
        nombre: data.name,
        id: data.id,
    }
}
