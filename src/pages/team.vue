<!-- 团队 -->
<template>
  <div class="team">
    <drawMenu />
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>团队成员</span>
          </div>
          <div class="teamLayout">
            <el-row>
              <el-col :span="4" class="teamLayoutImgLayout">
                <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="teamLayoutImgs" />
              </el-col>
              <el-col :span="16">
                <span class="describe">
                  团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员
                  团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员
                  团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员
                  团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员
                  团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员
                  团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员
                  团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员
                  团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员团队成员
                </span>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import drawMenu from '@/components/drawMenu'
export default {
  name: 'team',
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

<style scoped lang="scss">
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .box-card{
    text-align: left;
  }
  .teamLayout{
    margin-top: 10px;
    .teamLayoutImgLayout {
      min-width: 300px;
    }
    .teamLayoutImgs{

      margin-right: 10px;
    }
  }
</style>
