<template>
  <div class="container-interno-1">
    <img :src="imagen" alt="No se encontro la imagen">
    <p>{{ texto }}</p>
  </div>
</template>

<script>
export default {
    props:{
        imagen:{
            type:String,
            required:true
        },
        texto:{
            type: String,
            required:true
        }
    }

}
</script>

<style scoped>
.container-interno-1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img{
    width: auto;
    height: 200px;
}

p{
    font-weight: bold;
    font-size: 18px;
}
</style>