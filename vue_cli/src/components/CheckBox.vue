<template>
  <div>
    <el-checkbox v-model="checked" true-label="备选项">备选项</el-checkbox>
    <el-checkbox v-model="checked" true-label="备选项2">备选项2</el-checkbox>
    <el-checkbox v-model="checked" true-label="备选项3">备选项3</el-checkbox>
    <br>

    <el-checkbox-group @change="aa" v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>

  </div>
</template>

<script>
    export default {
        name: "CheckBox",
        data(){
            return {
                checked: true,
                checkList:[]
            }
        },
        methods:{
            aa(){
                console.log(this.checkList)
            }
        }
    }
</script>

<style scoped>

</style>
