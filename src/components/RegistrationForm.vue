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

</style>