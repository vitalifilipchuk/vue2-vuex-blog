<template>
    <div class="post">
        <div class="post__title">{{post.title}}</div>
        <div class="post__author">by <strong>{{post.author}}</strong></div>
        <div class="post__date">{{post.date}}</div>
        <div class="post__topic">{{post.topic}}</div>
        
        <div class="post__text">{{post.text}}</div>
        <ul class="post__tags">
            <li 
                class="tag post__tag"
                v-for="tag in post.tags"
            >
                {{tag}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'postDetail',
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style scoped>
.post {
    width: 100%;
    background: transparent;
    border-radius: 7px;
    padding: 16px;
    border: none;
    box-shadow: none;
    margin-bottom: 10px;
}

.post__date {
    font-weight: bold;
    font-size: 14px;
}

.post__topic {
    color: #888888;
    font-size: 14px;
    margin-bottom: 10px;
}

.post__title {
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
}

.post__tags {
    text-align: right;
}
</style>
