import axios from 'axios';

const consumirAPIPokemon = async (id) =>{
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.data);
    return respuesta;
}

const consumirAPIImagen = async (id) =>{
    const respuesta = axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`).then(resp => resp.data);
    return respuesta;
}

function obtenerRandomId (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerPokemon= async () =>{
    const numeroAleatorio = obtenerRandomId(1,20);
    const data = await consumirAPIPokemon(numeroAleatorio);
    
    const pokemon={
        nombre: data.name,
        id: data.id,
    }

    return pokemon;
}


export const obtenerPokemonFachada = async()=>{
    const pokemon = await obtenerPokemon();
    return pokemon;
}
