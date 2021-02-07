const login = () => {
    let userNameInput = document.getElementById('auth_user_name').value;
    let passwordInput = document.getElementById('auth_password').value;

    let isAuthCheckboxChecked = document.getElementById('auth_checkbox').checked;

    // call validation function to get error string
    let validationError = validate(userNameInput, passwordInput, isAuthCheckboxChecked);
    if (validationError == undefined) {
        // login process

    } else {
        // display error to the user

    }
}

const validate = (userName, password, isPolicyChecked) => {
    if(userName != '' && password != '' && isPolicyChecked) {
        // validate user name on regex 
        let regex = new RegExp('[a-zA-Z]');
        let isUserName = regex.test(userName);
        if (isUserName == false) {
            return 'Please enter user name by only characters.';
        }

        // validate password on length 
        let isPassword = (password.length > 5) ? true : false;
        if (isPassword == false) {
            return 'Please enter password with length greater then 5.';
        }
    } else {
        return 'Please enter and check all fields!';
    }
}
