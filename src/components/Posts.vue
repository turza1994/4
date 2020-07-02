<template>
    <div class="Posts ui segment">
        <div class="post" v-for="post in posts" v-bind:key="post.id">
            <h3>{{post.title}}</h3>
            <p> <span id="category">category:</span>  {{post.category}} </p>
            <p> {{post.body}} </p>
            <InputForm submitButton="Update" modalButton="Update post" v-bind:edit_id = "post.id" v-bind:edit_title = "post.title" v-bind:edit_body= "post.body" />
            <button type="button" class="btn btn-danger" @click="onClickDelete(post.id)" >Delete post</button>
            <hr>
        </div>
    </div>
  
  
</template>

<script>
import InputForm from './InputForm'
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'Posts',

    components: {
        InputForm
    },

    computed: mapGetters(['posts']),

    methods: {
        ...mapActions(['fetchPosts', 'updatePost', 'deletePost']),

        onClickDelete(id){
            this.deletePost(id);
        }
    }
}
</script>

<style scoped>

    .Posts{
        margin: 0;
        padding: 0;
        font-size: 1.4rem;
    }

    .post{
        padding: 2vw;
    }

    .post h3{
        font-size: 1.8rem;
        color: rgb(250, 0, 137);
    }

    .post #category{
        color: rgb(134, 13, 255);
    }

    .post p{
        opacity: 0.8;
    }
    
</style>