import styles from "../styles.module.css";
import LikeBtn from "./likeBtn.tsx";

const postItem = () => {
    return (
        <div className={styles.postItem}>
            <div className={styles.postItem_image}></div>
            <div className={styles.postItem_descrip}>
                <h3>Post</h3>
                <LikeBtn postID={1} />
            </div>
        </div>
    );
}

export default postItem;