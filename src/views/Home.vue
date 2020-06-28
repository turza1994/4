<template>
  <div class="home">
    <AddPost />
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
import AddPost from '@/components/AddPost.vue'
import Posts from '@/components/Posts.vue'

export default {
  name: 'Home',
  components: {
    AddPost,
    Posts
  }
}
</script>
