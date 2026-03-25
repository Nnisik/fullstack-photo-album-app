function addPostImage(postImageLink) {
    const postImageElement = document.createElement("img");
    postImageElement.classList.add("post-img");
    postImageElement.setAttribute("href", postImageLink);
    postImageElement.setAttribute("alt", "");
    return postImageElement;
}

function addPostHeader(postHeader) {
    const postHeaderElement = document.createElement("h3");
    postHeaderElement.classList.add("post_text");
    postHeaderElement.innerText = postHeader;
    return postHeaderElement;
}

function addPostDescription(postDescription) {
    const postDescriptionElement = document.createElement("div")
    postDescriptionElement.classList.add("post-description");
    postDescriptionElement.appendChild(addPostHeader(postDescription.header))
    return postDescriptionElement;
}

export function createPostContainer(postInfo) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");
    postContainer.appendChild(addPostImage(postInfo.img));
    postContainer.appendChild(addPostDescription(postInfo.descript))
    return postContainer;
}