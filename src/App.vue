<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/" class="nav_link">Masonry Version</router-link>
      <router-link to="/packery" class="nav_link">Packery Version</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 15px 5px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
