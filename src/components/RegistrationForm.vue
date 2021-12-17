<template>
    <form 
        @submit.prevent="submitHandler" 
        class="form registration-form"
    >
        <div class="form__row">
            <input 
                :class="{error: (errors.name && errors.name.length)}"
                type="text" 
                v-model="name" 
                name="name"
                placeholder="Логін"
            />
        </div>
        <div class="form__row">
            <input 
                :class="{error: (errors.password && errors.password.length)}"
                type="password" 
                v-model="password" 
                name="password"
                placeholder="Пароль"
            />
        </div>
        <div class="form__row">
            <input 
                :class="{error: (errors.confirmPassword && errors.confirmPassword.length)}"
                type="password" 
                v-model="confirmPassword" 
                name="confirmPassword"
                placeholder="Повторіть пароль"
            />
        </div>
        <input type="submit" value="Реєстрація" class="btn btn--block">

        <div 
            class="form__errors" 
            v-if="!errors.formIsValid"
        >
            <ul>
                <li v-for="error in errors.name">{{ error }}</li>
                <li v-for="error in errors.password">{{ error }}</li>
                <li v-for="error in errors.confirmPassword">{{ error }}</li>
            </ul>
        </div>
    </form>
</template>

<script>
import validationMixin from '@/mixins/validationMixin';
import { mapActions } from 'vuex'

export default {
    name: 'RegistrationForm',
    mixins: [validationMixin],
    data() {
        return {
            errors: [],
            name: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        ...mapActions(
            'users',
            ['addUser']
        ),
        submitHandler() {

            this.errors = this.validateForm({name: this.name, password: this.password})

            if (this.errors.formIsValid) {
                this.errors = this.checkConfirmPassword('confirmPassword', this.password, this.confirmPassword)
                if (this.errors.formIsValid) {

                    if (this.getUserList === null) {
                        this.addUser({name: this.name, password: this.password})
                        this.$emit('registerUser', {name: this.name, password: this.password})
                    }
                    else {
                        this.errors = this.checkUserExists('name', this.name)
                        if (this.errors.formIsValid) {
                            this.addUser({name: this.name, password: this.password})
                            this.$emit('registerUser', {name: this.name, password: this.password})
                        }
                    }
                }

            }
        }
    },
}
</script>

<style>
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