<template>
    <div class="blog__filter filter">
        <h3 class="filter__title">Фільтр</h3>
        <input 
            type="text" 
            v-model="searchField"
            class="filter__input"
            @input="searchByName"
        >
        <div class="filter__tags">
            <label 
                v-for="option in tagOptions"
            >
                <input 
                    type="checkbox" 
                    :value="option.value"
                    v-model="selectedTags"
                    @change="searchByTags"
                >
                {{ option.text }}
            </label>
        </div>
        <div class="filter__dates">
            <div class="filter__date">
                <input 
                    class="date__input"
                    type="date"
                    :min="minDate"
                    :max="timeTo"
                    v-model="timeFrom"
                >
            </div>
            <div class="filter__date">
                <input 
                    class="date__input"
                    type="date"
                    v-model="timeTo"
                    :min="timeFrom"
                    :max="maxDate"
                >
            </div>
            <Button
                text="Пошук по даті"
                @click.native="searchByDate(timeFrom, timeTo)"
             />
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button'

export default {
    name: 'blogFilter',
    components: {
        Button
    },
    data() {
        return {
            searchField: '',
            tagOptions: [],
            selectedTags: [],
            timeFrom: '2021-12-01',
            timeTo: '',
            maxDate: '',
            minDate: '2021-12-01'
        }
    },
    created() {
        this.tagOptions = this.$store.getters['posts/getTagOptions']
        let today = new Date(),
            dd = today.getDate(),
            mm = today.getMonth() + 1,
            yyyy = today.getFullYear()

        if (dd < 10) dd = '0' + dd
        if (mm < 10) mm = '0' + mm

        this.maxDate = yyyy + '-' + mm + '-' + dd
        this.timeTo = yyyy + '-' + mm + '-' + dd
    },
    methods: {
        searchByName() {
            let newQuery = {...this.$route.query, searchName: this.searchField}
            this.$router.replace({path: this.$route.path, query: newQuery})
            this.$emit('triggerSearch')
        },
        searchByTags() {
            let newQuery = {...this.$route.query, searchTags: this.selectedTags.join(',')}
            this.$router.replace({path: this.$route.path, query: newQuery})
            this.$emit('triggerSearch')
        },
        searchByDate(from, to) {
            let newQuery = {...this.$route.query, dateFrom: from, dateTo: to}
            this.$router.replace({path: this.$route.path, query: newQuery})
            this.$emit('triggerSearch')
        }
    }
}
</script>

<style>
    .filter {
        margin-bottom: 20px;
    }
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

    .filter__dates {
        padding: 20px 0;
    }

    .filter__date {
        width: 50%;
        display: inline-block;
        margin-bottom: 15px;
    }

    .filter__date input {
        width: calc(100% - 30px);
    }
</style>
