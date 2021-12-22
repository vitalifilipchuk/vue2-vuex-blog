<template>
    <div class="post">

        <div class="post__date">{{post.date}}</div>
        <div class="post__author">by <strong>{{post.author}}</strong></div>
        <div class="post__topic">{{post.topic}}</div>
        <div class="post__title">{{post.title}}</div>
        <div class="post__text">{{post.text}}</div>
        <ul class="post__tags">
            <li 
                class="tag post__tag"
                v-for="tag in post.tags"
            >
                {{tag}}
            </li>
        </ul>
        <router-link class="post__edit" :to="{ name: 'Post', params: { postId: post.id }}">Переглянути</router-link>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>
.post {
    width: 100%;
    background: #fefefe;
    border-radius: 7px;
    padding: 16px;
    border: 1px solid #c3c3c3;
    box-shadow: 0 2px 20px rgb(0 114 162 / 7%);
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
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}

.post__tags {
    margin: 20px 0;
    padding-left: 0;
}
.tag {
    display: inline-block;
    position: relative;
    font-size: 14px;
    line-height: 1.5;
    padding-left: 12px;
}

.tag:before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #008B8B;
}

.post__tag {
    margin-right: 6px;
}
.post__tag:last-child {
    margin-right: 0;
}

.post__author strong {
    color: #4682B4;
}
.post__edit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: #FF7F50;
    color: #ffffff;
}
</style>
