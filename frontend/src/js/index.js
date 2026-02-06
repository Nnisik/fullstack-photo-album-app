function getPosts() {
    fetch("http://127.0.0.1:8080/api/gallery")
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))
}

document.addEventListener("DOMContentLoaded", () => {
    // signUpForm.style.display = "none";

    // TODO: get posts from DB throught REST API
    getPosts();
})

const addNewPostBtn = document.getElementById("profile_add-new-btn");

// pop-up window pointers
const popUpWindow = document.getElementById("pop-up_add-new-post")
const popUpCloseBtn = document.getElementById("pop-up_close-modal-btn");

// login screen pointers
const loginForm = document.getElementById("login-form");
const signUpForm = document.getElementById("sign-up-form");
const goToSignUpBtn = document.getElementById("open-sign-up-btn");
const goToLoginBtn = document.getElementById("open-login-btn");

addNewPostBtn.addEventListener("click", () => {
    popUpWindow.style.display = "flex";
});

popUpCloseBtn.addEventListener("click", () => {
    popUpWindow.style.display = "none";
});

// Buttons events
// FIXME: currently does nothing
goToSignUpBtn.onclick = () => {
    loginForm.style.display = "none";
    signUpForm.style.display = "block";
}

// FIXME: currently does nothing
goToLoginBtn.onclick = () => {
    signUpForm.style.display = "none";
    loginForm.style.display = "block";
}