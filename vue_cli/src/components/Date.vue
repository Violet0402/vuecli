<template>
    <div>
      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker @change="aa"
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
    </div>
</template>

<script>
    export default {
        name:"Date",
        data() {
            return {
                value1: '',
            };
        },
        methods:{
            aa(){
                console.log(this.value1)
            }
        }
    };
</script>

<style scoped>

</style>
