<template>
  <div id="app">
    <router-link to="/button">button</router-link>
    <router-link to="/buttonDetail">buttonDetail</router-link>
    <router-link to="/link">link</router-link>
    <router-link to="/layout">layout</router-link>
    <router-link to="/container">container</router-link>
    <router-link to="/containerExam">containerExam</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
