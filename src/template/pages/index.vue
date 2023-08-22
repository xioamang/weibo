<template>
  <div class="home">
      <div class="header">
          <header-view></header-view>
      </div>
      <div class="content">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import headerView from '../views/home/header-view.vue'
export default {
    name: 'index',
    components:{
        headerView,
    },
}
</script>

<style lang='less' scoped>
    .home{
        background: #f1f2f5;
        .header{
            width: 100vw;
            height: 60px;
            padding: 0 50px;
            background: rgb(255, 255, 255);
            margin-bottom: 5px;
        }
        .content{
            width: 100vw;
            height: calc(100vh - 65px);
            padding: 0 200px 0 200px;
        }
    }
</style>