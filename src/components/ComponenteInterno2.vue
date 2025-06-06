<template>
  <div>
    <h1 :style="{color:colorTexto}">{{ mensaje1 }}</h1>
    <h2 :style="{color:colorTexto}">{{ mensaje2 }}</h2>
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

<style>

</style>