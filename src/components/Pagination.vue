<template>
    <div class="pagination">
        <template v-for="page in pageCount">
            <div
                class="pagination__item"
                :class="{'active': (currentPage === page)}"
                :data-page="page"
                @click="$emit('paginate', page)"
            >
                {{page}}
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        listItems: {
            type: Array,
            default: []
        },
        itemsPerPage: {
            type: Number,
            default: 5
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },
    computed: {
        pageCount() {
            let itemsCount = this.listItems.length
            return Math.ceil(itemsCount/this.itemsPerPage)
        }
    }
}
</script>

<style>
    .pagination {
        display: flex;
        justify-content: center;
    }
    .pagination__item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        color: #fff;
        background-color: #00a1e4;
        font-size: 16px;
        font-weight: bold;
        margin: 0 3px;
        cursor: pointer;
    }
    .pagination__item.active {
        background-color: #FF7F50;
    }
</style>
