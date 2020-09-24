<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="danger" size="small">危险按钮</el-button>
    <el-button type="text" size="mini">你好</el-button>
    <el-button type="success"  icon="el-icon-setting">设置</el-button>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
  </div>
</template>

<script>
    export default {
        name: "ButtonDetail"
    }
</script>

<style scoped>

</style>
