<template>
  <img :src="weibo_logo" alt="" class="weibo-logo">
</template>

<script>
import weibo_logo from '../../../../assets/weibo_logo.png'
export default {
    name: 'weibo-logo',
    data(){
        return {
            weibo_logo
        }
    }
}
</script>

<style lang="less" scoped>
img{
    height: 45px;
}
</style>