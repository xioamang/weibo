<template>
  <el-input 
    class="search-header" 
    prefix-icon="el-icon-search" 
    size="mini" 
    placeholder="请搜索微博"
/>
</template>

<script>
export default {
    name: 'search-header'
}
</script>

<style lang="less" scoped>
.search-header {
    width: 180px;
}
</style>