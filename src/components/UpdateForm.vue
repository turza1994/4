<template>
  <modal name="UpdateForm" height="auto" :scrollable="true" :adaptive="true" width="80%">
        <div class="ModalForm">
            <h3>Update Post</h3>
            <br>
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" id="title" v-model="post.title" value="post.title">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group">
                <label for="body">Description:</label>
                <br/>
                <textarea class="form-control" id="body" cols="140" rows="10" v-model="post.body">  </textarea>
            </div>
            <button class="btn btn-outline-primary btn-lg" @click="onClickUpdate">Update</button>
        </div>
        
    </modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'UpdateForm',

    data(){
      return{
        title: '',
        body: ''
      }
    },

    computed: mapGetters(['post']),

    methods: {
        ...mapActions(['updatePost', 'setPost']),

        onClickUpdate(){
          console.log(this.title, this.body)
          // const post = {
          //   id: this.post.id,
          //   title: this.title,
          //   body: this.body,
          //   category: 'unknown'
          // }
          // this.setPost(this.post);
          this.$store.dispatch('setPost', this.post);
          this.$modal.hide('UpdateForm');
          
        }
    }
  }
</script>

<style scoped>
  .customInput{
    display: flex;
    flex-direction: column;
  }
</style>