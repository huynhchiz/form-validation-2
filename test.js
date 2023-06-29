const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const formSignUp = $('.form__sign-up')
const inputs = $$('[rules]')

const app = {
    signUpValidate: function () {
        // xử lý các events
        function handleEvents () {
            // loại bỏ hành vi mặc định khi submit form
            formSignUp.onsubmit = function (e) {
                e.preventDefault()
            }

            // lặp qua các ô input
            for (let input of inputs) {
                // từ input lấy ra form group của input đó
                let formGroupInputE = input.closest('.sign-up-main__input-group');
                // từ form group lấy ra element hiển thị warning
                let inputWarningE = formGroupInputE.querySelector('.sign-up__warning-div');
                
                function addInvalid () {
                    formGroupInputE.classList.add('sign-up-main__input-group--invalid')
                }

                function removeInvalid () {
                    formGroupInputE.classList.remove('sign-up-main__input-group--invalid')
                }

                function isRequired (value, message) {
                    if (!value) {
                        addInvalid ()
                        inputWarningE.innerText = message || 'not required'
                    }
                }
                function isEmail (value, message) {
                    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    if (!regex.test(value)) {
                        addInvalid ()
                        inputWarningE.innerText = message || 'not email'
                    }
                }
                
                input.onblur = function () {
                    // chọn ra tất cả rules của input đó
                    let rules = input.getAttribute('rules').split("|")
                    for (let rule of rules) {
                        if (rule === 'isRequired') {
                            isRequired (input.value)
                        } else if (rule === 'isEmail') {
                            isEmail (input.value)
                            break;
                        }
                    }
                }
                
                input.oninput = function () {
                    if (input.value) {
                        removeInvalid ()
                        inputWarningE.innerText = ''
                    }
                }
            }
        }
        handleEvents()
    },



    start: function () {
        this.signUpValidate()
    }

}

app.start()