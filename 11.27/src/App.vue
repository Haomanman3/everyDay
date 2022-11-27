<template>
  <div id="app">
    <router-view class="page"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body,#app,.page{
  height: 100%;
}

*{
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  // font-family: "Yanone Kaffeesatz", sans-serif !important; 
}

</style>
