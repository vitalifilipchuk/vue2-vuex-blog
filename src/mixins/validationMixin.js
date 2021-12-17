const validationMixin = {
    data: () => ({
        validationRules: {
            name: {
                rules: [
                    value => !!value || 'Потрібно вказати логін!',
                    value => (value.length >= 3) || 'Логін повинен бути довжиною 3 символи або більше'
                ]
            },
            password: {
                rules: [
                    value => !!value || 'Потрібно вказати пароль!',
                    value => (value.length >= 5) || 'Пароль повинен бути довжиною 5 символів або більше'
                ]
            }
        }
    }),
    methods: {
        validateField(inputName, value) {
            return this.validationRules[inputName].rules
                .filter(rule => {
                    const isValid = rule(value)
    
                    if(isValid !== true) {
                        return isValid
                    }
                })
                .map(rule => rule(value))
        },
        validateForm(form) {
            const formErrors = {}
            let formIsValid = true

            for(let property in form) {
                const errors = this.validateField(property, form[property])

                if (errors.length) {
                    formIsValid = false;
                }
                
                formErrors[property] = errors

                formErrors.formIsValid = formIsValid
                
            }

            return formErrors
        },
        checkConfirmPassword(inputName, password, confirmPassword) {
            const formErrors = {}
            let formIsValid = true
            let isValid = (password === confirmPassword) || 'Впевніться, що правильно ввели повторний пароль'
            if (isValid !== true) {
                formIsValid = false
                formErrors[inputName] = [isValid]
            }

            formErrors.formIsValid = formIsValid

            return formErrors
        },
        checkUserExists(inputName, login) {
            const formErrors = {}
            let formIsValid = true
            let usersData = JSON.parse(localStorage.getItem("users"))
            let isValid = !!(usersData.filter(user => user.name === login).length === 0) || 'Користувач з таким логіном вже існує!'
            if (isValid !== true) {
                formIsValid = false
                formErrors[inputName] = [isValid]
            }

            formErrors.formIsValid = formIsValid

            return formErrors
        },
        checkUserNotExists(inputName, login) {
            const formErrors = {}
            let formIsValid = true
            let usersData = JSON.parse(localStorage.getItem("users"))
            let isValid = !!usersData.filter(user => user.name === login).length || 'Користувача з таким логіном не існує'
            if (isValid !== true) {
                formIsValid = false
                formErrors[inputName] = [isValid]
            }

            formErrors.formIsValid = formIsValid

            return formErrors
        },
        checkUserPassword(inputName, userProps) {
            const formErrors = {}
            let formIsValid = true
            let usersData = JSON.parse(localStorage.getItem("users"))
            let existingUser = usersData.filter(user => user.name === userProps.name)
            let isValid = !!(existingUser[0].password === userProps.password) || 'Неправильно вказаний пароль'
            console.log(isValid)
            if (isValid !== true) {
                formIsValid = false
                formErrors[inputName] = [isValid]
            }

            formErrors.formIsValid = formIsValid

            return formErrors
        }
    },
}
  
  export default validationMixin;