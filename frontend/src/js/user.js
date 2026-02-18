function checkNewUserFieldsNotEmpty(userParams) {
    // check if username field is not empty
    if (userParams.user_username === "") {
        // TODO: add message
        return false;
    }

    // check if email field is not empty
    if (userParams.user_email === "") {
        // TODO: add message
        return false;
    }

    // check if password field is not empty
    if (userParams.user_password === "") {
        // TODO: add message
        return false;
    }

    return true;
}

// API request funcition
// GET curtain user by his ID
// TODO: JWT
function getUser(userId) {
    fetch("https://localhost:8080/api_v1/user/" + userId)
        .then((response) => response.json())
        .then((data) => {
            // TODO: add data manipulation
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
        })
}

// TODO: create new user
function createNewUser() {
    // get new user data from sign up form fields
    const newUserParams = {
        user_username: document.getElementById("sign-up-form_username").value ,
        user_email: document.getElementById("sign-up-form_email").value ,
        user_password: document.getElementById("sign-up-form_password").value
    };

    if (checkNewUserFieldsNotEmpty(newUserParams)) {
        const options = {
            method: "POST",
            body: JSON.stringify(newUserParams)
        };

        // TODO: add form fields managing
        fetch("https://localhost:8080/api_v1/user", options)
            .then((response) => response.json())
            .then((json) => {
                // TODO: add returned data manipulation
                console.log(json)
            });
    }
}
