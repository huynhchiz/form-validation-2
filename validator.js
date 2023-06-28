function Validator(formSelector) {
    // tạo 1 object chứa tất cả các rules của form
    let formRules = {}

    // Quy ước tạo rules
    // -nếu có lỗi thì return 'error message'
    // -nếu không có lỗi thì return 'undefined'
    let validatorRules = {
        isRequired: function (value) {
            return vales ? undefined : 'Vui lòng nhập vào ô này'
        },
        isEmail: function (value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Nhập đúng định dạng email'
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Độ dài tối thiểu phải là ${min} ký tự`
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Độ dài tối đa là ${max} ký tự`
            }
        },
        isConfirmed: function (value) {
            return vales ? undefined : 'Vui lòng nhập vào ô này'
        },
    }
    
    // Lấy ra form element trong DOM từ `formSelector`
    let formElement = document.querySelector(formSelector)

    // nếu có form element
    if (formElement) {

        //chọn ra những elements có thuộc tính name và rules
        let inputs = formElement.querySelectorAll('[name][rules]')

        for (let input of inputs) {
            formRules[input.name] = input.getAttribute('rules')
        }
    }
    console.log(formRules)
}
