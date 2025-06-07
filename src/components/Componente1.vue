<template>
  <div class="container">
    <div class="textos">
      <h4>Puntaje: {{ puntaje }}</h4>
      <h4>Intentos: {{ intentos }}</h4>
    </div>
    <div class="container-int-1">
      <div v-for="(item, index) in arreglo" :key="index" class="margin-objetos">
        <componente-interno-1 :imagen="item.imagen" :texto="item.texto" />
      </div>
    </div>
    <div>
      <componente-interno-2
        :mensaje1="mensaje1"
        :mensaje2="mensaje2"
        :colorTexto="colorTexto"
      />
    </div>
    <div class="centrar">
      <button @click="jugar()">Jugar</button>
    </div>
  </div>
</template>

<script>
import ComponenteInterno1 from "@/components/ComponenteInterno1.vue";
import ComponenteInterno2 from "@/components/ComponenteInterno2.vue";
import { obtenerPokemonFachada } from "@/client/PokemonClient";
export default {
  components: {
    ComponenteInterno1,
    ComponenteInterno2,
  },
  data() {
    return {
      arreglo: [
        {
          imagen: "https://placehold.co/200x200/000000/000000.png",
          texto: "XXXXXXXXXXX",
        },
        {
          imagen: "https://placehold.co/200x200/000000/000000.png",
          texto: "XXXXXXXXXXX",
        },
        {
          imagen: "https://placehold.co/200x200/000000/000000.png",
          texto: "XXXXXXXXXXX",
        },
      ],
      mensaje1: null,
      mensaje2: null,
      colorTexto: null,
      puntaje: 0,
      intentos: 0,
    };
  },
  methods: {
    async jugar() {
      this.intentos++;
      let contador=0;
      for (let i = 0; i < this.arreglo.length; i++) {
        const resp = await obtenerPokemonFachada();
        this.arreglo[i].texto = resp.nombre;
        this.arreglo[
          i
        ].imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${resp.id}.svg`;
        if (resp.id === this.arreglo[i].id) {
          contador++;
        }
      }
      this.calcularPuntosObtenidos(contador);
    },
    calcularPuntosObtenidos(contador){
        if(contador ===3){
            this.puntaje +=5;
        }else if(contador ===2){
            this.puntaje +=2;
        }else{
            this.puntaje +=0;
        }
    }
  },
};
</script>

<style scoped>
.container {
  border: 1px solid black;
}
.container-int-1 {
  display: flex;
  justify-content: center;
}
.centrar {
  display: flex;
  justify-content: center;
  margin: 10px;
}
button {
  padding: 10px;
  font-size: 18px;
  border: 3px solid black;
  width: 200px;
}
.margin-objetos {
  margin: 0 30px;
}
.textos {
  display: flex;
  justify-content: center;
}
h4 {
  margin: 10px 30px;
  font-size: 20px;
  color: #2c3e50;
}
</style>