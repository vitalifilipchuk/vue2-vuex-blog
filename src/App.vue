<template>
  <div id="app">
    <Header 
      :isLoggedIn="isLoggedIn"
      @logoutUser="logoutUser" 
     />
    <div class="page__content">
      <router-view 
         
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Header from './components/Header'
import { mapState, mapActions } from 'vuex'
import usersGlobalMixin from './mixins/globalMixins/usersGlobalMixin'

Vue.mixin(usersGlobalMixin);

export default {
  name: 'App',
  components: {
    Header
  },

  data() {
    return {

    }
  },

  mounted() {
    this.getAllUsers()
    this.fetchLoggedUser()
  },

  methods: {
    ...mapActions('users', ['getAllUsers']),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  line-height: 1.5;
}

h1, h2 {
  text-align: center;
}

.container {
  max-width: 1000px;
  padding: 0 20px;
  margin: 0 auto;
}

.page__content {
  padding: 50px 0;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form__row {
    max-width: 420px;
    width: 100%;
    margin-bottom: 20px;
}
.form__group {
  max-width: 420px;
  width: 100%;
  margin-bottom: 20px;
}
.form__group input[type="checkbox"] {
  margin-right: 5px;
}
.form__group label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.form__row input {
    width: 100%;
    background: #fefefe;
    line-height: 24px;
    font-size: 16px;
    border-radius: 7px;
    padding: 18px 23px 18px 16px;
    height: 60px;
    border: 1px solid #c3c3c3;
    box-shadow: 0 2px 20px rgba(0,114,162,.07);
}

.form__row textarea {
  width: 100%;
  background: #fefefe;
  line-height: 24px;
  font-size: 16px;
  border-radius: 7px;
  padding: 18px 23px 18px 16px;
  border: 1px solid #c3c3c3;
  box-shadow: 0 2px 20px rgba(0,114,162,.07);
  resize: none;
}

.form__row select {
  width: 100%;
  background: #fefefe;
  line-height: 24px;
  font-size: 16px;
  border-radius: 7px;
  padding: 18px 23px 18px 16px;
  border: 1px solid #c3c3c3;
  height: 60px;
  box-shadow: 0 2px 20px rgba(0,114,162,.07);
}

input.error {
  border: 1px solid red;
}

.form__row input.error {
  border: 1px solid red;
}

.form__errors {
    color: red;
}

.form .btn {
    max-width: 320px;
}
</style>
