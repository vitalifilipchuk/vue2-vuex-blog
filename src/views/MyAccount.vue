<template>
  <div class="account">
    <div class="container">
      <h1>Особистий кабінет</h1>
      <Button 
          class="logout-btn" 
          :text="'Вийти'" 
          v-if="isLoggedIn" 
          @click.native="logoutUser"   
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '../components/Button'

export default {
  name: 'Account',
  components: {
    Button
  },
}
</script>
