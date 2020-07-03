<template>
  <div>
    <div class="ui placeholder segment addPost">
        <div class="ui icon header">
            <i class="pencil alternate icon"></i>
            Do you want to create a new category ?
        </div>
        <CategoryForm submitButton="Create" modalButton="Add Category" />
    </div>
  </div>
</template>

<script>
import CategoryForm from './CategoryForm';

export default {
    name: 'AddCategory',
    components:{
        CategoryForm
    }
}
</script>

<style scoped>

</style>