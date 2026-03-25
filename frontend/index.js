import {showNoPostsMessage} from "./src/js/modules/ui-module";

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


function checkNewPostFieldNotEmpty(postParams) {
    // check if description field is not empty
    if (postParams.post_text === "") {
        console.log("New post should have description")
        return false;
    }

    // check if image link field is not empty
    if (postParams.post_img === "") {
        console.log("New post should have an image")
        return false;
    }

    return true;
}

// API request function
// GET all posts request
function getAllPosts() {
    fetch("https://localhost:8080/api_v1/post")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // TODO: create a feed page to see recent posts from diff users
            return data;
        })
}

// GET all user's posts request
function getAllUserPosts(userId) {
    fetch("https://localhost:8080/api_v1/post/" + userId)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (length(data) == 0) {
                showNoPostsMessage()
            } else {
                data.forEach((post) => {
                    createPostElement(post)
                })
            }
        })
        .catch((e) => {
            console.log(e);
        })
}

// POST new post request
function createNewPost(userId) {
    // get post data from form fields
    // TODO: add getting current user Id from JWT file
    const newPostParams = {
        post_text: document.getElementById("add-new_name-input").value,
        post_img: document.getElementById("add-new_img-input").value,
        post_creator_id: userId
    };

    if (checkNewPostFieldNotEmpty(newPostParams)) {
        const options = {
            method: 'POST',
            body: JSON.stringify(newPostParams)
        };
        createNewPostRequest(options)
    }
}

// TODO: create POST API-request
function createNewPostRequest(JSONRequestOptions) {
    fetch("https://localhost:8080/api_v1/post", JSONRequestOptions)
        .then((response) => response.json())
        .then((json) => {
            // TODO: add returned data manipulation
            console.log(json)
        });
}

function createPostElement(postInfo) {
    const newPostDiv = document.createElement("div");
    newPostDiv.classList.add("post");

    const newPostImg = document.createElement("img");
    newPostImg.classList.add("post-img");
    newPostImg.setAttribute("href", postInfo.img)
    newPostImg.setAttribute("alt", "")
    newPostDiv.appendChild(newPostImg);

    const newPostDescripDiv = document.createElement("div");
    newPostDescripDiv.classList.add("post-description");

    const newPostHeader = document.createElement("h3");
    newPostHeader.classList.add("post_text");
    newPostHeader.innerText = postInfo.text;
    newPostDescripDiv.appendChild(newPostHeader)

    // TODO: LIKE BUTTON
    // const likeBtnDiv = document.createElement("div");
    // likeBtnDiv.classList.add("post_like-btn");
    // TODO: add pointers for a specific post
    // const likeBtn = document.createElement("input");
    // likeBtn.classList.add("like-btn");
    // likeBtn.type = "checkbox";
    // likeBtn.name = "like-btn";
    // likeBtnDiv.appendChild(likeBtn);
    // TODO: add pointers for a specific post
    // const likeBtnCounter = document.createElement("p");
    // likeBtnCounter.classList.add("like-btn_counter");
    // likeBtnCounter.innerText = postInfo.likes_number;
    // likeBtnDiv.appendChild(likeBtnCounter);
    // newPostDescripDiv.appendChild(likeBtnDiv);
    // TODO: add pointers for a specific post

    newPostDiv.appendChild(newPostDescripDiv);
    galleryContainer.appendChild(newPostDiv);
}

/*
document.addEventListener("DOMContentLoaded", () => {

    let currentPage = "profile"
    // Noticing currently active page
    switch(currentPage) {

        // Profile page gallery
        case "profile":
            // TODO: getting current user ID from JWT
            // TODO: JWT
            let currentUserID;

            try {
                // FIXME
                // TODO: connect function from diff files
                getAllUserPosts(currentUserID);
            }
            catch (e) {
                console.log(e);
            }
            break;

        default:
            console.log("no such page exist");
    }
});
*/

// profile page pointers
const addNewPostBtn = document.getElementById("profile_add-new-btn");
const galleryContainer = document.getElementById("profile_gallery");

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
addNewPostBtn.addEventListener("click", () => {
    createNewPost();
});

window.addEventListener("load", (event) => {
    showNoPostsMessage();
});