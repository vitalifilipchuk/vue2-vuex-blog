<template>
  <div class="blog">
    <div class="container">
        <addPostForm
            v-if="isLoggedIn"
        >

        </addPostForm>
    </div>
    
  </div>
</template>

<script>
import addPostForm from '@/components/blog/addPostForm'

export default {
  name: 'Blog',
  components: {
    addPostForm
  },
  data() {
    return {
    }
  },

}
</script>

<style>

</style>
