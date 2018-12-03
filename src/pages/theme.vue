<!-- 主题 -->
<template>
  <div class="theme">
    <drawMenu />
    <!-- 艺丰画室 -->
    <el-row>
      <el-col :span="12">
        <el-card class="box-card" style="height: 300px">
          <div slot="header" class="clearfix">
            <span>艺丰画室</span>
          </div>
          <div class="text item">
            图片或视频
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card" style="height: 300px">
          <div class="text item">
            <el-row class="row-bg">
              <el-col :span="12">
                <el-button type="primary">招事</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary">默认按钮</el-button>
              </el-col>
            </el-row>
            <el-row class="row-bg">
              <el-col :span="12">
                <el-button type="primary">标题</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary">默认按钮</el-button>
              </el-col>
            </el-row>
            <el-row class="row-bg">
              <el-col :span="12">
                <el-button type="primary">标题</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary">默认按钮</el-button>
              </el-col>
            </el-row>
            <el-row class="row-bg">
              <el-col :span="12">
                <el-button type="primary">标题</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="primary">默认按钮</el-button>
              </el-col>
            </el-row>

          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 正在进行中的主题 -->
    <el-row>
      <el-col :span="24">
        <el-card class="box-card" style="height: 300px">
          <div slot="header" class="clearfix">
            <span>正在进行中的主题</span>
          </div>
          <div class="text item">
            正在进行中的主题1
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card" style="height: 300px">
          <div slot="header" class="clearfix">
            <span>正在进行中的主题</span>
          </div>
          <div class="text item">
            正在进行中的主题2
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card" style="height: 300px">
          <div slot="header" class="clearfix">
            <span>正在进行中的主题</span>
          </div>
          <div class="text item">
            正在进行中的主题3
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import drawMenu from '@/components/drawMenu'
export default {
  name: 'theme',
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
  .row-bg {
    padding: 10px 0;
  }
</style>
