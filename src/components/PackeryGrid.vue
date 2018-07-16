<template>
    <div class="wrapper">
        <h1>{{ msg }}</h1>
        <button class="refresh" @click="refresh">Refresh grid</button>
        <hr>

        <div class="grid" v-packery="{itemSelector: '.grid_item', percentPosition: true}">
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
    import {packeryEvents} from 'vue-packery-plugin';
    export default {
        name: "PackeryGrid",
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
                const grid = document.querySelector('.grid');
                // Align tiles to prevent overlapping
                packeryEvents.$emit('layout', grid );
            }
        },
        mounted: function(){
            this.$store.dispatch('refresh');
        }
    }
</script>

<style scoped>

</style>