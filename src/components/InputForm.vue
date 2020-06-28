<template>
  <div>
  <b-button v-b-modal.modal-1>Launch demo modal</b-button>

  <b-modal id="modal-1" size="xl" title="BootstrapVue" ref="my-modal" hide-footer >
    
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" class="form-control" id="title" v-model="title">
      </div>
      <div class="form-group">
        <label for="body">Description:</label>
        <br/>
        <textarea id="body" cols="140" rows="10" v-model="body"></textarea>
      </div>
      
      <button type="submit" class="btn btn-primary" @click="onSubmit">Submit</button>
    
  </b-modal>
</div>
</template>

<script>
import {mapActions} from 'vuex';

  export default {
    name: 'InputForm',

    data(){
      return{
        title: '',
        body: ''
      }
    },

    methods: {
        ...mapActions(['addPost']),

        onSubmit(){
          const post = {
            title: this.title,
            body: this.body
          }
          this.addPost(post);
          this.$refs['my-modal'].hide()
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