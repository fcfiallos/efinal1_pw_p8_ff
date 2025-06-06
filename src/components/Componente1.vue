<template>
  <div class="container">
    <div v-for="(item, index) in arreglo" :key="index" class="container-int-1">
      <componente-interno-1 :imagen="item.imagen" :texto="item.texto" />
    </div>
    <div>
      <button>Jugar</button>
    </div>
    <div>
      <componente-interno-2 :mensaje1="mensaje1" :mensaje2="mensaje2" :colorTexto="colorTexto"/>
    </div>
  </div>
</template>

<script>
import ComponenteInterno1 from "@/components/ComponenteInterno1.vue";
import ComponenteInterno2 from "@/components/ComponenteInterno2.vue";
import {} from "@/client/PokemonClient";
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
      colorTexto: null
    };
  },
};
</script>

<style>
.container{
    border: 1px solid black;
}
.container-int-1{
    display: flex;
    flex-direction: row;
}
</style>