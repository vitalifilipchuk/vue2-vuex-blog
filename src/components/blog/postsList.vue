<template>
    <div class="blog__list">
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
import Pagination from '@/components/Pagination'
import { mapState } from 'vuex'

export default {
    name: 'postsList',
    components: {
        Post,
        Pagination
    },
    data() {
        return {
            itemsPerPage: 5,
            currentPage: 1
        }
    },
    computed: {
        ...mapState(
            'posts', ['posts']
        ),
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
        console.log(this.pageCount)
        console.log(this.paginatedItems)
    },
    methods: {
        paginatePosts(pageNum) {
            let queryPage = this.$route.query.page ? this.$route.query.page : '1'
            if (pageNum != queryPage) {
                let newQuery = {...this.$route.query, page: pageNum}
                this.$router.push({path: this.$route.path, query: newQuery})
                this.currentPage = pageNum
            }
            
        }
    }
}
</script>
