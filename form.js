const login = () => {
    let userNameInput = document.getElementById('auth_user_name').value;
    let passwordInput = document.getElementById('auth_password').value;

    let isAuthCheckboxChecked = document.getElementById('auth_checkbox').checked;

    // call validation function to get error string
    let validationError = validate(userNameInput, passwordInput, isAuthCheckboxChecked);
    if (validationError == undefined) {
        // login process
        console.log('You are logged in!');

    } else {
        // display error to the user
        showError(validationError);
    }
}

const showError = (validationError) => {
    let errorSpan = document.getElementById('error');

    // replace class `empty-error` by `error` to display error container to user
    errorSpan.className = 'error';
    errorSpan.textContent = validationError;

    // hide error in 1000 ml
    setTimeout(hideError, 1000);
}

const hideError = () => {
    document.getElementById('error').className = 'empty-error';
}

document.getElementById('auth-btn').addEventListener('click', function (e) {
    e.preventDefault();
    login();
});

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
