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
            // TODO: finish
            return data;
        })
}

// GET all user's posts request
function getAllUserPosts(userId) {
    fetch("https://localhost:8080/api_v1/post/" + userId)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // TODO: finish
            return data;
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

        // TODO: create POST API-request
        fetch("https://localhost:8080/api_v1/post", options)
            .then((response) => response.json())
            .then((json) => {
                // TODO: add returned data manipulation
                console.log(json)
            });
    }
}

document.getElementById("create-new_btn").onclick = () => {
    createNewPost();
}