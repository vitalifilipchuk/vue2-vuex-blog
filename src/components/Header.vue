<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <router-link to="/">Головна</router-link>
                <router-link to="/blog">Блог</router-link>
                <router-link to="/blog/create">Додати статтю</router-link>
                <router-link v-if="!isLoggedIn" to="/login">Увійти</router-link>
                <router-link v-if="!isLoggedIn" to="/registration">Реєстрація</router-link>
                <router-link v-if="isLoggedIn" to="/account">Особистий кабінет</router-link>
                <Button 
                    class="logout-btn" 
                    :text="'Вийти'" 
                    :isLoggedIn="isLoggedIn"
                    v-if="isLoggedIn" 
                    @click.native="$emit('logoutUser')"   
                />
                <Button 
                    class="back-btn" 
                    :text="'Назад'" 
                    @click.native="goBack"   
                />
            </div>
        </div>
    </header>
</template>

<script>
import Button from '../components/Button'

export default {
    name: 'Header',
    components: {
        Button
    },

    props: {
        isLoggedIn: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        goBack() {
            this.$router.back()
        }
    }
}
</script>

<style>
    .header {
        padding: 20px 0;
    }
    .header__inner {
        display: flex;
        align-items: center;
    }

    .header__inner .btn {
        margin-right: 15px;
    }

    .header__inner a {
        display: inline-block;
        margin-right: 15px;
        color: #000;
        font-size: 18px;
        font-weight: 600;
        transition: 0.4s;
    }

    .header__inner > :first-child {
        margin-right: auto;
    }

    .header__inner > :last-child {
        margin-right: 0;
    }

    .header__inner a:hover {
        color: #00a1e4;
    }
</style>