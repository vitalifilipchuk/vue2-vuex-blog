<template>
    <div>
        <h2>Редагувати статтю id:{{post.id}}</h2>
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
                    :text="'Зберегти зміни'"
                />
            </div>
        </form>
    </div>
</template>

<script>
import Button from '../../components/Button'
import { mapActions } from 'vuex'

    export default {
        name: 'editPostForm',
        components: {
            Button
        },
        props: {
            post: {
                type: Object,
                default: () => {}
            }
        },
        data() {
            return {
                topicOptions: [],
                selectedTopic: '',
                tagOptions: []
            }
        },
        created() {
            this.tagOptions = this.$store.getters['posts/getTagOptions']
            this.topicOptions = this.$store.getters['posts/getTopicOptions']
            this.selectedTopic = this.post.topic
        },
        methods: {
            ...mapActions(
                'posts',
                ['editPost']
            ),
            submitHandler() {

                const editedPost = {
                    id: this.post.id,
                    title: this.post.title,
                    topic: this.selectedTopic,
                    text: this.post.text,
                    tags: this.post.tags,
                    author: this.post.author,
                    date: this.post.date
                }
                
                this.editPost(editedPost)
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
