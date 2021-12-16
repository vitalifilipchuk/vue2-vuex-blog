<template>
  <div class="login">
    <h1>This is a login page</h1>
    <LoginForm 
      @loginUser="name => this.$emit('loginUser', name)" 
    />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>
