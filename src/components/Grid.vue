<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="refresh" @click="refresh">Refresh grid</button>
    <hr>

    <div v-masonry transition-duration="0.3s" item-selector=".grid_item" column-width=".grid-sizer" class="grid">
      <div class="grid-sizer"></div>
      <div v-masonry-tile v-for="item in images"  :class="[grid_item, item.value ]">
        <div class="fader">
          <p class="content">Content</p>
        </div>
        <img :src="item.url" alt="grid item" class="grid_image" @load="redraw">
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
      return {
          grid_item: 'grid_item'
      }
  },
  computed: {
      images() {
          return this.$store.getters.getImages;
      }
  },
  methods: {
      ...mapActions([
          'refresh'
      ]),
      redraw: function () {
          this.$redrawVueMasonry(); // Align tiles to prevent overlapping
      }
  },
  mounted: function(){
     this.$store.dispatch('refresh');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
* {
  box-sizing: border-box;
}
.refresh {
  display: block;
  background-color: #4286f4;
  color: #fff;
  font-size: 15px;
  padding: 11px 15px 10px 15px;
  border: none;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 5px;
  margin: 0 auto 30px auto;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: darken(#4286f4, 10%);
  }
}

.grid-sizer {
  width: 100%;
}

.grid_item {
  width: 100%;
  float: left;
  position: relative;
  &:hover .fader {
    z-index: 1;
    opacity: 1;
  }
}

.grid_item_2 {
  width: 25%;
}

.grid_item_3 {
  width: 25%;
}

.fader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: -1;
  opacity: 0;
  transition: all 0.5s ease;
}

.content {
  margin: 47% 0 0 0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}

.grid_image {
  display: block;
  border-radius: 10px;
  margin: 0;
  padding: 2px;
  width: 100%;
  height: auto;
}

@media screen and (min-width: 768px) {
  .grid_item, .grid-sizer {
    width: 25%;
  }
  .grid_item_2 {
    width: 50%;
  }
}

@media screen and (min-width: 1200px) {
  .grid_item, .grid-sizer {
    width: 20%;
  }
  .grid_item_2 {
    width: 40%;
  }
}

@media screen and (min-width: 1850px) {
  .grid_item, .grid-sizer {
    width: 14.28571428571429%;
  }
  .grid_item_2 {
    width: 28.57142857142858%;
  }
}
</style>
