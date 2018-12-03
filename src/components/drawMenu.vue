<template>
  <div class="home">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="teachingConcept">教学概念</el-menu-item>
      <el-menu-item :disabled="true" index="3">学员成长记录查询</el-menu-item>
      <el-menu-item index="team">团队</el-menu-item>
      <el-menu-item index="theme">
        主题
      </el-menu-item>
      <el-menu-item index="about">关于</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex: 'home',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
