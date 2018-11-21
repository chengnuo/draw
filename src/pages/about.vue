<!-- 关于 -->
<template>
  <div class="about">
    <!-- 滚动图片 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <!-- 我们的艺丰 -->
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我们的艺丰</span>
          </div>
          <div class="text item">
            <p>三七互娱</p>

            <p>37 Interactive Entertainment</p>

            <p>三七互娱成立于2011年，是全球TOP25游戏企业，中国互联网20强企业。</p>

            <p>于2015年完成整体上市（股票代码：002555），凭借优异业绩被纳入中证沪深300指数、明晟MSCI指数、高盛“新漂亮50”名单，是国内A股优秀的社会公众公司。三七互娱的发行与研发总部设在广州，并在北京、上海、安徽、江苏、湖北、香港、台湾、东南亚、日韩及欧美等多个地区设有子公司或办事处等分支机构。</p>

            <p>旗下拥有37手游、37游戏、37GAMES等全球知名的专业游戏运营平台，以及极光网络、墨鹍科技等国内顶尖的游戏研发团队；聚集了来自全国各地的网络精英及高素质管理人才，形成了投入、精细、分享、创新的企业价值观。</p>

            <p>作为全球领先的游戏运营商、研发商，三七互娱以“传承中华文化精髓”为理念，积极推动国产游戏的全球化发展，同时积极布局影视、音乐、动漫、VR、文化健康产业及互联网少儿教育等领域。</p>

            <p>此外，三七互娱积极开展互联网企业党建工作，深入学习贯彻习近平新时代中国特色社会主义思想和十九大精神。为践行企业社会责任，三七互娱还成立了广东省游心公益基金会，累计捐赠超1000万元，用于边远地区高中教育等公益事业。</p>

            <p>三七互娱，玩心创造世界！</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 我们的艺丰 -->
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>教学理念</span>
          </div>
          <div class="text item">
            <p>1.关注学生的进步和发展。首先，要求教师有“对象”意识。教学不是唱独角戏，离开“学”，就无所谓“教”，因此，教师必须确立学生的主体地位，树立“一切为了学生的发展”的思想。其次，要求教师有“全人”的概念。学生发展是全面的发展，而不是某一方面或某一学科的发展。教师千万不能过高地估计自己所教学科的价值，而且也不能仅把学科价值定位在本学科上，而应定位在对一个完整的人的发展上。</p>
            <p>2.关注教学效益，要求教师要有时间与效益的观念。教师在教学时既不能跟着感觉走，又不能简单地把“效益”理解为“花最少的时间教最多的内容”。教学效益不取决于教师教多少内容，而是取决于对单位时间内学生的学习结果与学习过程综合考虑的结果。</p>
            <p>3.关注可测性和量化。如教学目标尽可能明确与具体，以便检测教师的工作效益。但是并不能简单地说量化就是好的、科学的。应该科学地对待定量与定性、过程与结果的结合，全面地反映学生的学业成就与教师的工作表现。因此，有效教学既要反对拒绝量化，又要反对过于量化。</p>
            <p>4.需要教师具备一种反思的意识。每一个教师要不断地反思自己的日常教学行为：“我的教学有效吗？”“什么样的教学才是有效的？”“有没有比我更有效的教学？”</p>
            <p>5.有效教学也是一套策略。要求教师掌握有关的策略性知识，以便于自己面对具体的情景做出决策，并不要求教师掌握每一项技能。</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'theme',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .row-bg {
    padding: 10px 0;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .box-card{
    text-align: left;
  }
</style>
