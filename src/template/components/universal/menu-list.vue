<template>
  <div class="menu">
      <div 
        class="item" 
        v-for="(item,index) in list" 
        :key="index"
        :style="{
          width
        }"
        :class="{
          [activeClass]:activeIndex===index
        }"
        @click="changeActive(index)"
      >
      <!-- 上面@click是监听事件 -->
        <i :class="item.icon" 
          :style="{
            'font-size':iconSize
          }"
          ></i>
      </div>
  </div>
</template>

<script>
export default {
    name: "menu-list",
    props:{
        list: {
            type:Array,
            required:true
        },
        vertical: {
            type:Boolean,
            default:false
        },
        width: {
            type:String,
            required:true
        },
        iconSize: {
          type:String,
          required:true
        },
        activeClass: {  
          type:String,
          default:''
        }
    },
    data(){
      return {
        // 默认第一个活跃元素的下标
        activeIndex:0,
      }
    },
    methods: {
      changeActive(index){
        this.activeIndex=index
        // 暴露事件，执行函数
        this.$emit('change',this.list[index],index)
      }
    }
}
</script>

<style lang="less" scoped>
  .menu{
    display: flex;
    justify-content: space-between;
    height: 100%;
    .item{
      height: 100%;
      cursor: pointer;
    }
  }
</style>