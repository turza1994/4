<template>
  <div>
    <b-button id="modalButton" class="text-center" @click="modalShow = !modalShow"> {{modalButton}} </b-button>

    <b-modal ref="my-modal" hide-footer title="Create Post" v-model="modalShow">
        <div class="ModalForm">
            <br>
            <div class="form-group">
                <label for="title">Category:</label>
                <input type="text" class="form-control" id="title" v-model="title">
            </div>
            <button class="btn btn-outline-primary btn-lg" @click="onSubmit">{{submitButton}}</button>
        </div>
    </b-modal>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'CategoryForm',

    props: ['submitButton', 'modalButton', 'edit_id'],

    data() {
      return {
        modalShow: false,
        title: ''
      }
    },

    methods:{
        ...mapActions(['addCategory']),

        onSubmit(){
            let category = {
                title: this.title
            }
            this.addCategory(category);
            this.$refs['my-modal'].hide()
        }
    }
}
</script>

<style>

</style>