<template>
    <modal name="hello-world" height="auto" :scrollable="true" :adaptive="true" width="80%">
        <div class="ModalForm">
            <h3>Write Post</h3>
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
            <button class="btn btn-outline-primary btn-lg" @click="onSubmit">Create</button>
        </div>
        
    </modal>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'ModalForm',
    
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
          this.$modal.hide('hello-world');
        },
        
        show () {
            this.$modal.show({
            template: `
                <div>
                <h1>This is created inline</h1>
                <p>{{ text }}</p>
                </div>
            `,
            props: ['text']
            }, {
            text: 'This text is passed as a property'
            }, {
            height: 'auto'
            }, {
            'before-close': () => { console.log('this will be called before the modal closes'); }
            })
        },

        hide () {
            this.$modal.hide('hello-world');
        }
    }
}
</script>

<style scoped>
    .ModalForm{
        padding: 5vh 5vw;
    }
</style>