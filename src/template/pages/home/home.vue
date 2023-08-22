<template>
  <div class="home">
      <div class="left-bar">
          首页
      <menu-list 
        :list="list" 
        width="150px" 
        vertical
        iconSize="20px"
        activeClass="tab-active"
        itemClass="tab-default"
      ></menu-list></div>
      <div class="list">
          <weibo-card></weibo-card>
      </div>
      <div class="right-bar"></div>
    </div>
</template>

<script>
import menuList from '@/template/components/universal/menu-list.vue';
import weiboCard from '@/template/views/universal/weibo-card.vue'
export default {
    name: 'home',
    components: {
        menuList,
        weiboCard
    },
    data(){
        return {
            list: [
                {
                    icon: 'el-icon-s-operation',
                    text: '全部关注'
                },
                {
                    icon: 'el-icon-star-off',
                    text: '最新微博'
                },
                {
                    icon: 'el-icon-s-check',
                    text: '特别关注'
                },
                {
                    icon: 'el-icon-user',
                    text: '好友圈'
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.home{
    height: 100%;
    display: flex;
    justify-content: space-between;
    .left-bar{
            width: 200px;
            height: 100%;
            background: rgb(255, 255, 255);
            padding: 20px 10px;
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
</style>
<style lang="less">
.tab-default{
    margin: 10px auto;
    padding: 5px 1px;
    border-radius: 5px;
    display: flex;
    font-size: 14px;
    &:hover{
        background: #f1f2f5;
    }
    span{
        flex: 1;
        padding-left: 5px;
    }
}
.tab-active{
  color: coral;
}
</style>