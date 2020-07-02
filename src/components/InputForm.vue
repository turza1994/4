<template>
  <div>
    <b-button id="modalButton" class="text-center" @click="modalShow = !modalShow"> {{modalButton}} </b-button>

    <b-modal ref="my-modal" hide-footer title="Create Post" v-model="modalShow">
        <div class="ModalForm">
            <br>
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" id="title" v-model="title">
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
                <textarea class="form-control" id="body" cols="140" rows="10" v-model="body"></textarea>
            </div>
            <button class="btn btn-outline-primary btn-lg" @click="onSubmit">{{submitButton}}</button>
        </div>
    </b-modal>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
  export default {
    name: 'InputForm', 
    
    props: ['submitButton', 'modalButton', 'edit_id', 'edit_title', 'edit_body'],

    data() {
      return {
        modalShow: false,
        title: this.edit_title,
        body: this.edit_body
      }
    },

    methods: {
        ...mapActions(['addPost', 'updatePost']),

        onSubmit(){
          const post = {
            title: this.title,
            body: this.body
          }
          
          if(this.submitButton=='Create'){
            this.addPost(post);
            this.title = '';
            this.body = '';
            this.$refs['my-modal'].hide()
          }

          if(this.submitButton=='Update'){
            post.id = this.edit_id;
            this.updatePost(post);
            this.title = '';
            this.body = '';
            this.$refs['my-modal'].hide()
          }

        }
    }
  }
</script>

<style scoped>

  #modalButton{
    background: rgb(35, 115, 236);
    color: white;
    margin-bottom: 1vw;
  }

</style>