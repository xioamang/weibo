<template>
  <div class="header-view">
    <span class="logo">
      <weibo-logo></weibo-logo>
    </span>
    <div class="search">
      <search-header></search-header>
    </div>
    <div class="menu-list">
      <menu-list 
        :list="list" 
        width="150px" 
        iconSize="25px" 
        activeClass="tab-active"
        @change="menuChange"
      ></menu-list>
    </div>
    <div class="btn-list">
      <menu-list :list="btns" width="50px" iconSize="18px"></menu-list>
    </div>
  </div>
</template>

<script>
import weiboLogo from '../../components/home/header/weibo_logo.vue'
import searchHeader from '../../components/home/header/search_header.vue'
import menuList from '../../components/universal/menu-list.vue'
export default {
  name: 'header-view',
  components: {
    weiboLogo,
    searchHeader,
    menuList
  },
  data(){
    return {
      list:[
        {
          icon:'el-icon-s-home',
          path:'/home'
        },
        {
          icon:'el-icon-video-play',
          path:'/home'
        },
        {
          icon:'el-icon-s-opportunity',
          path:'/home'
        },
        {
          icon:'el-icon-s-comment',
          path:'/home'
        },
        {
          icon:'el-icon-s-custom',
          path:'/home'
        }
      ],
      btns:[
        {
          icon:'el-icon-setting',
        },
        {
          icon:'el-icon-moon',
        },
        {
          icon:'el-icon-edit',
        },
      ]
    }
  },
  methods: {
    menuChange(event){
      
    }
  }
}
</script>

<style lang="less" scoped>
.header-view{
    display: flex;
    height: 100%;
    align-items: center;
    .logo{
      margin: 0 10px 0 0 ;
      flex: 1;
    }
    .search{
      flex: 2;
    }
    .menu-list{
      flex:4;
      padding: 0 150px;
    }
    .btn-list{
      flex: 3;
    }
}
</style>
<style>
.tab-active{
  color: coral;
}
</style>