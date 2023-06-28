function Validator(formSelector) {
    // tạo 1 object chứa tất cả các rules của form
    let formRules = {

    }
    
    // Lấy ra form element trong DOM từ `formSelector`
    let formElement = document.querySelector(formSelector)

    // nếu có form element
    if (formElement) {

        //chọn ra những elements có thuộc tính name và rules
        let inputs = formElement.querySelectorAll('[name][rules]')

        for (let input of inputs) {
            console.log(input.getAttribute('rules'))
        }
    }
}
