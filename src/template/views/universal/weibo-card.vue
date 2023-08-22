<template>
    <div class="weibo-card">
        <div class="user-info">
            <avatar
            size="50px"
            ></avatar>
            <span class="user-name"></span>
            <span class="user-introduce"></span>
        </div>
        <div class="content">
            <div class="content-text"></div>
            <div class="content-imgs"></div>
        </div>
        <div class="card-menu">
            <div class="card-share"></div>
            <div class="card-message"></div>
            <div class="card-likes"></div>
        </div>
    </div>
</template>

<script>
import avatar from '@/template/components/universal/avatar.vue'
export default {
    name: 'weibo-card',
    components:{
        avatar
    }
}
</script>

<style lang="less">
</style>