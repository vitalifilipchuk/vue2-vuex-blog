<template>
    <div>
        <h2>Додати нову статтю</h2>
        <form 
            class="form"
            @submit.prevent="submitHandler" 
        >
            <div class="form__row">
                <input 
                    type="text" 
                    v-model="post.title" 
                    name="title"
                    placeholder="Заголовок"
                />
            </div>
            <div class="form__row">
                <select 
                    name="topic"
                    v-model="selectedTopic"
                >
                    <option 
                        v-for="option in topicOptions" 
                        :value="option.value"
                    >
                        {{ option.text }}
                    </option>
                </select>
            </div>
            <div class="form__row">
                <textarea 
                    v-model="post.text"
                    name="text"
                    placeholder="Опис"
                ></textarea>
            </div>
            <div class="form__group">
                <label 
                    v-for="option in tagOptions"
                >
                    <input 
                        type="checkbox" 
                        :value="option.value"
                        v-model="post.tags"
                    >
                    {{ option.text }}
                </label>
            </div>
            <div class="form__controls">
                <Button
                    class="confirm-btn"
                    :text="'Додати статтю'"
                />
            </div>
        </form>
    </div>
</template>

<script>
import Button from '../../components/Button'
import { mapActions } from 'vuex'

    export default {
        name: 'addPostForm',
        components: {
            Button
        },
        data() {
            return {
                post: {
                    id: 1,
                    title: '',
                    topic: '',
                    text: '',
                    tags: [],
                    author: '',
                    date: ''
                },
                topicOptions: [],
                selectedTopic: 'Загальна',
                tagOptions: []
            }
        },
        computed: {
            getPostsList() {
                return this.$store.getters['posts/postsList']
            }
        },
        created() {
            this.tagOptions = this.$store.getters['posts/getTagOptions']
            this.topicOptions = this.$store.getters['posts/getTopicOptions']
        },
        methods: {
            ...mapActions(
                'posts',
                ['addPost']
            ),
            submitHandler() {
                let currentDate = new Date()
                const newPost = {
                    id: Math.ceil(Math.random()*1000000),
                    title: this.post.title,
                    topic: this.selectedTopic,
                    text: this.post.text,
                    tags: this.post.tags,
                    author: this.getCurrentUser,
                    date: currentDate.getDate() + '-' + (currentDate.getMonth()+1) + '-' + currentDate.getFullYear()
                }
                
                this.addPost(newPost)
                this.$router.push({ name: 'Blog' })
            }
        }
    }
</script>

<style scoped>
    form {
        max-width: 420px;
        margin: 0 auto 50px;
    }
</style>
