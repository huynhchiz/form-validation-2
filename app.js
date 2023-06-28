const app = {
    signUpValidator() {
        Validator('.form__sign-up')
    },


    start() {
        this.signUpValidator()
    }
}

app.start()