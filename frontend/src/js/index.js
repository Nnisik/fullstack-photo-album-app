function createPostElement(postInfo, galleryPointer) {
    const newPostDiv = document.createElement("div");
    newPostDiv.classList.add("post");

    const newPostImg = document.createElement("img");
    newPostImg.classList.add("post-img");
    // TODO: add href attribute
    // TODO: add alt attribute
    newPostDiv.appendChild(newPostImg);

    const newPostDescripDiv = document.createElement("div");
    newPostDescripDiv.classList.add("post-description");

    const newPostHeader = document.createElement("h3");
    newPostHeader.classList.add("post_text");
    newPostHeader.innerText = postInfo.text;
    newPostDescripDiv.appendChild(newPostHeader)

    const likeBtnDiv = document.createElement("div");
    likeBtnDiv.classList.add("post_like-btn");
    // TODO: add pointers for a specific post

    const likeBtn = document.createElement("input");
    likeBtn.classList.add("like-btn");
    likeBtn.type = "checkbox";
    likeBtn.name = "like-btn";
    likeBtnDiv.appendChild(likeBtn);
    // TODO: add pointers for a specific post

    const likeBtnCounter = document.createElement("p");
    likeBtnCounter.classList.add("like-btn_counter");
    likeBtnCounter.innerText = postInfo.likes_number;
    likeBtnDiv.appendChild(likeBtnCounter);
    newPostDescripDiv.appendChild(likeBtnDiv);
    // TODO: add pointers for a specific post

    newPostDiv.appendChild(newPostDescripDiv);
    galleryPointer.appendChild(newPostDiv);
}

function drawNoPostsMessage(parentElementPointer) {
    const emptyListMessage = document.createElement("p");
    emptyListMessage.innerText = "Seems like you there are no posts yet";
    // TODO: add styling for message text
    parentElementPointer.appendChild(emptyListMessage);
}

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
                if (length(allUserPosts) === 0) {
                    drawNoPostsMessage(document.getElementById("profile_gallery"))
                } else {
                    allUserPosts.forEach((post) => {
                        createPostElement(post, document.getElementById("profile_gallery"))
                    });
                }

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