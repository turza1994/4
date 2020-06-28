<template>
    <div class="Posts ui segment">
        <div class="post" v-for="post in posts" v-bind:key="post.id">
            <h3>{{post.title}}</h3>
            <p> <span id="category">category:</span>  {{post.category}} </p>
            <p> {{post.body}} </p>
            <button type="button" class="btn btn-primary" @click="onClickEdit(post.id, post.title, post.body)" >Edit post</button>
            <button type="button" class="btn btn-danger" @click="onClickDelete(post.id)" >Delete post</button>
            <!-- <UpdateForm /> -->
            <hr>
        </div>
    </div>
  
  
</template>

<script>
// import UpdateForm from './UpdateForm'
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'Posts',

    components: {
        // UpdateForm
    },

    computed: mapGetters(['posts']),

    methods: {
        ...mapActions(['fetchPosts', 'updatePost', 'deletePost']),

        show () {
            this.$modal.show('hello-world');
        },

        hide () {
            this.$modal.hide('hello-world');
        },
        
        onClickEdit(id, title, body){
            const post = {
                id,
                title,
                body,
                category: 'unknown'
            }
            this.updatePost(post)
            this.$modal.show('UpdateForm');
            
        },

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