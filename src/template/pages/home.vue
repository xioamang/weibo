<template>
  <div class="home">
      <div class="header">
          <header-view></header-view>
      </div>
      <div class="content">
          <div class="left-bar"></div>
          <div class="list"></div>
          <div class="right-bar"></div>
      </div>
  </div>
</template>

<script>
import headerView from './../views/home/header-view.vue'
export default {
    name: 'home',
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
            display: flex;
            justify-content: space-between;
            padding: 0 200px 0 200px;
            .left-bar{
                width: 200px;
                height: 100%;
                background: rgb(0, 114, 134);
            }
            .right-bar{
                width: 300px;
                height: 100%;
                background: rgb(184, 19, 19);
            }
            .list{
                flex: 1;
                background: rgb(71, 30, 193);
                margin: 0 10px;
            }
        }
    }
</style>