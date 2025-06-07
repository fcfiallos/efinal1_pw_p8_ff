<template>
  <div>
    <p :style="{color:colorTexto}">{{ mensaje1 }}</p>
    <p :style="{color:colorTexto}">{{ mensaje2 }}</p>
  </div>
</template>

<script>
export default {
props:{
    mensaje1:{
        type: String,
        required: true
    },
    mensaje2:{
        type: String,
        required: true
    },
    colorTexto:{
        type:String,
        required:true
    }
}
}
</script>

<style scoped>
p{
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
}
</style>