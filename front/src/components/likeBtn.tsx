import {FC, useState} from "react";

interface likeBtnProps {
    liked?: boolean;
    postID: number;
}

const likeBtn: FC<likeBtnProps> = ({ liked=false, postID }) => {
    const handleLikeBtnClick = (postId) => {
        // TODO
        handleLikeBtn(!like);
        console.log("Like button clicked");
    }

    const [like, handleLikeBtn] = useState(liked);

    return ( <input type={"checkbox"} checked={like} onClick={handleLikeBtnClick}/> );
};

export default likeBtn;