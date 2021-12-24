<template>
    <div class="blog__list">
        <blogFilter
            @triggerSearch="paginatePosts"
         />
        <template v-for="post in paginatedItems">
            <Post :post="post"></Post>
        </template>

        <Pagination
            class="blog__pagination"
            :listItems="posts"
            :currentPage="currentPage"
            @paginate="paginatePosts"
        />
    </div>
</template>

<script>
import Post from './Post.vue'
import blogFilter from './blogFilter.vue'
import Pagination from '@/components/Pagination'

export default {
    name: 'postsList',
    components: {
        Post,
        Pagination,
        blogFilter
    },
    data() {
        return {
            itemsPerPage: 5,
            currentPage: 1,
            posts: []
        }
    },
    computed: {
        pageCount() {
            let listItems = this.posts.length
            return Math.ceil(listItems/this.itemsPerPage)
        },
        paginatedItems() {
            const sliceStart = (this.currentPage - 1) * this.itemsPerPage,
            sliceEnd = sliceStart + this.itemsPerPage

            return this.posts.slice(sliceStart, sliceEnd)
        }
    },
    created() {
        // console.log(this.$store.getters['posts/postsList'])
        this.posts = this.$store.getters['posts/postsList']
    },
    methods: {
        paginatePosts(pageNum) {
            let postsByName = []
            if (this.$route.query.searchName) {
                this.posts = this.$route.query.searchName.length > 2 ? this.$store.getters['posts/postsByName'](this.$route.query.searchName) : this.$store.getters['posts/postsList']
            }
            let queryPage = this.$route.query.page ? this.$route.query.page : '1'
            if (pageNum && (pageNum != queryPage)) {
                let newQuery = {...this.$route.query, page: pageNum}
                this.$router.push({path: this.$route.path, query: newQuery})
                this.currentPage = pageNum
            }
            
        }
    }
}
</script>
