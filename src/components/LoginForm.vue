<template>
    <form 
        class="form login-form"
        @submit.prevent="submitHandler" 
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
        <input type="submit" value="Увійти" class="btn btn--block login-btn">

        <div 
            class="form__errors" 
            v-if="!errors.formIsValid"
        >
            <ul>
                <li v-for="error in errors.name">{{ error }}</li>
                <li v-for="error in errors.password">{{ error }}</li>
            </ul>
        </div>
    </form>
</template>

<script>
import validationMixin from '@/mixins/validationMixin'

export default {
    name: 'LoginForm',
    mixins: [validationMixin],
    data() {
        return {
            errors: {},
            name: '',
            password: ''
        }
    },
    methods: {
        submitHandler() {
            this.errors = this.validateForm({name: this.name, password: this.password})

            if (this.errors.formIsValid) {
                this.errors = this.checkUserNotExists('name', this.name)
                if (this.errors.formIsValid) {
                    this.errors = this.checkUserPassword('password', {name: this.name, password: this.password})
                    if (this.errors.formIsValid) {
                        this.$emit('loginUser', this.name)
                    }
                }
            }
        }
    }
}
</script>

<style>
</style>