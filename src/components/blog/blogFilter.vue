<template>
    <div class="blog__filter filter">
        <h3 class="filter__title">Фільтр</h3>
        <input 
            type="text" 
            v-model="searchField"
            class="filter__input"
            @input="searchByName"
        >
    </div>
</template>

<script>
export default {
    name: 'blogFilter',
    data() {
        return {
            searchField: '',
            tagOptions: [],
        }
    },
    created() {
        this.tagOptions = this.$store.getters['posts/getTagOptions']
    },
    methods: {
        searchByName() {
            let newQuery = {...this.$route.query, searchName: this.searchField}
            this.$router.replace({path: this.$route.path, query: newQuery})
            this.$emit('triggerSearch')
        }
    }
}
</script>

<style>
    .filter__input {
        width: 100%;
        background: #fefefe;
        line-height: 24px;
        font-size: 16px;
        border-radius: 7px;
        padding: 8px 16px;
        height: 40px;
        border: 1px solid #c3c3c3;
        box-shadow: 0 2px 20px rgb(0 114 162 / 7%);
        margin-bottom: 15px;
    }

    .filter__title {
        text-align: center;
        font-size: 20px;
        margin-bottom: 20px;
    }
</style>
