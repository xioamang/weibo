<template>
  <div class="avatar">
    <img 
      :style="{
        width:size,
        height:size,
        borderRadius:size
      }"
      src="http://127.0.0.1:8080/u%3D1402358144%2C3316482469%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG.webp" 
      alt=""
    >
  </div>
</template>

<script>
export default {
    name: 'avatar',
    
    props: {
        avatar: {
          type:String,
          default:''
        },
        size: {
          type:String,
          required:true
        }
        },
    data(){
      return {
      }
    }
}
</script>

<style lang="less" scoped>
</style>