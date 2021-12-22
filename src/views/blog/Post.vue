<template>
  <div class="post-page">
    <div class="container">
        <postDetail :post="post" />
    </div>
    
  </div>
</template>

<script>
import postDetail from '@/components/blog/postDetail'

export default {
  name: 'Post',
  components: {
    postDetail
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
