export let showNoPostsMessage = () => {
    let emptyMessageElement = document.createElement("p");
    emptyMessageElement.innerText = "Ops, seems like you haven't posted anything yet...";
    galleryContainer.appendChild(emptyMessageElement);
}