document.addEventListener("DOMContentLoaded", () => {

    // Noticing currently active page
    switch(getCurrentPage()) {

        // Profile page gallery
        case "profile":
            // TODO: getting current user ID from JWT
            // TODO: JWT
            let currentUserID;

            try {
                // FIXME
                // TODO: connect function from diff files
                const allUserPosts = getAllUserPosts(currentUserID);
            }
            catch (e) {
                console.log(e);
            }
            break;

        default:
            console.log("no such page exist");
    }
});

// profile page pointers
const addNewPostBtn = document.getElementById("profile_add-new-btn");

// pop-up window pointers
const popUpWindow = document.getElementById("pop-up_add-new-post")
const popUpCloseBtn = document.getElementById("pop-up_close-modal-btn");

// login screen pointers
const loginForm = document.getElementById("login-form");
const signUpForm = document.getElementById("sign-up-form");
const goToSignUpBtn = document.getElementById("open-sign-up-btn");
const goToLoginBtn = document.getElementById("open-login-btn");

// add new post modal window managing
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