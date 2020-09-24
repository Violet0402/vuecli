<template>
    <div>
      <el-radio label="男" @change="aa" v-model="gender">男</el-radio>
      <el-radio label="女" @change="aa" v-model="gender">女</el-radio>
      <br>
      <el-radio-group v-model="radio">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
<!--
      <el-radio label="女" @change="aa"  v-model="gender">女</el-radio>
-->
    </div>
</template>

<script>
    export default {
        name: "Radio",
        data(){
            return{
                gender:"",
                radio:""
            }
        },
        methods:{
            aa(){
                alert("你好")
            }
        }
    }
</script>

<style scoped>

</style>
