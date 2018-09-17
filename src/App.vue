<template>
  <div id="app">
  	<cd-header></cd-header>
    <router-view/>
  </div>
</template>

<script>
import CdHeader from '@/components/templates/Header';

export default {
  name: 'App',
  components: {
  	CdHeader
  }
};
</script>

<style>
html{
  background-color: #e2e1e0;
}
#app {
  font-family: 'Asap', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
