<template>
  <div class="postedit-page">
    <div class="container">
        <editPostForm :post="post" />
    </div>
    
  </div>
</template>

<script>
import editPostForm from '@/components/blog/editPostForm'

export default {
  name: 'Post',
  components: {
    editPostForm
  },
  data() {
    return {
      post: this.$store.getters['posts/postById'](this.$route.params['postId'])
    }
  }

}
</script>

<style>

</style>
