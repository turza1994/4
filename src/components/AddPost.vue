<template>
  <div class="AddPost jumbotron">
    <div class="ui placeholder segment addPost">
        <div class="ui icon header">
            <i class="pencil alternate icon"></i>
            Do you want to write new post ?
        </div>
        <!-- <InputForm /> -->
        <button type="button" class="btn btn-primary" id="add" @click="show" >Write post</button>
    </div>
  </div>
</template>

<script>
// import InputForm from './InputForm'
export default {
    name: 'AddPost',
    components:{
        // InputForm
    },

    methods: {

        show () {
            this.$modal.show('hello-world');
        },

        hide () {
            this.$modal.hide('hello-world');
        }
    }
}
</script>

<style scoped>

    .addPost{
        margin: 0;
        padding: 0;
    }

    #add{
        width: 10vw;
        margin: 0 auto;
    }

</style>