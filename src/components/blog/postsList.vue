<template>
    <div class="blog__list">
        <template v-for="post in posts">
            <Post :post="post"></Post>
        </template>
    </div>
</template>

<script>
import Post from './Post.vue'
import { mapState } from 'vuex'

export default {
    name: 'postsList',
    components: {
        Post
    },
    computed: {
        ...mapState(
            'posts', ['posts']
        )
    }
}
</script>
