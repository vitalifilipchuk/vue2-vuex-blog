<template>
  <div class="blog">
    <div class="container">
        <postsList>
            
        </postsList>
    </div>
    
  </div>
</template>

<script>
import postsList from '@/components/blog/postsList'

export default {
  name: 'Blog',
  components: {
    postsList
  },
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },

}
</script>

<style>

</style>
