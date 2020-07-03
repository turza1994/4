<template>
  <div>
    <AddCategory />
    <h2>Category List:</h2>
    <div class="category" v-for="category in categories" v-bind:key="category.id">
        <p>{{category.title}}</p>
        <hr>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import AddCategory from '@/components/AddCategory.vue';

export default {
    name: 'Categories',

    components:{
      AddCategory
    },

    computed: mapGetters(['categories'])

}
</script>

<style>

</style>