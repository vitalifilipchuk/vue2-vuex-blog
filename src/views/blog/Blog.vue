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
  data() {
    return {
    }
  },

}
</script>

<style>

</style>
