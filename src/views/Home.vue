<template>
  <div class="home">
    <div class="container">
      <div 
        class="dashboard" 
        v-if="users.length > 0"
      >
        <div 
          class="dashboard__item" 
          :key="user.name" 
          v-for="user in users"
        >
          {{ user.name }}
        </div>
      </div>
      <div v-if="users.length === 0">
        <p>Не створено жодного користувача.</p>
        <div>
          <Button 
            class="login-btn" 
            :text="'Зареєструватися'" 
            @click.native="showPopup"  
          />
        </div>
        <Modal 
          :popupActive="popupActive" 
          @closePopup="closePopup" 
          @registerUser="user => this.$emit('registerUser', user)" 
        >
          <div 
              class="popup__close" 
              @click="closePopup"
          >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none"><rect y="11.678" width="16" height="2" rx="1" transform="rotate(-45 0 11.678)" fill="#00A1E4"></rect><rect x="1.414" width="16" height="2" rx="1" transform="rotate(45 1.414 0)" fill="#00A1E4"></rect></svg>
          </div>
          <div class="popup__content">
              <h2>Register User</h2>
              <RegistrationForm 
                  @registerUser="user => this.$emit('registerUser', user)" 
              />
          </div>
        </Modal>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '../components/Button'
import Modal from '../components/Modal'
import RegistrationForm from '../components/RegistrationForm'

export default {
  name: 'Home',
  components: {
    Button,
    Modal,
    RegistrationForm
  },
  props: {
    users: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      popupActive: false
    }
  },
  methods: {
    showPopup() {
      this.popupActive = true
    },
    closePopup() {
      this.popupActive = false
    }
  }
}
</script>

<style>
.dashboard {
  padding: 16px 12px;
  border: 2px solid #00a1e4;
  border-radius: 10px;
}

.dashboard__item {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
}

.dashboard__item:last-child {
  margin-bottom: 0;
}
</style>
