<!-- 用户管理 -->
<template>
  <div class="userManagement">
    <drawMenu />
    用户管理
  </div>
</template>

<script>
  import drawMenu from '@/components/drawMenu'
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    drawMenu,
  },
}
</script>

<style scoped>

</style>
