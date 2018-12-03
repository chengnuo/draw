<!-- 教学概念 -->
<template>
  <div class="teachingConcept">
    <drawMenu />
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>实战技巧</span>
          </div>
          <div>
            <el-tree
              :data="data6"
              node-key="id"
              default-expand-all
            >
            </el-tree>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>课程安排1</span>
          </div>
          <div>
            <p>111</p>
            <p>111</p>
            <p>111</p>
            <p>111</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>课程安排2</span>
          </div>
          <div>
            <p>111</p>
            <p>111</p>
            <p>111</p>
            <p>111</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import drawMenu from '@/components/drawMenu'
export default {
  name: 'teachingConcept',
  data() {
    return {
      data6: [
        {
          id: 1,
          label: 'A xxxx',
        },
        {
          id: 2,
          label: 'B xxxx',
        },
        {
          id: 3,
          label: 'C xxxx',
        },
        {
          id: 4,
          label: 'D xxxx',
        },
        {
          id: 5,
          label: 'E xxxx',
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  components: {
    drawMenu,
  },
}
</script>

<style scoped>
.box-card{
  text-align: left;
  margin-bottom: 20px;
}

</style>
