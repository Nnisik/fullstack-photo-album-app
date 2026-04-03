import PostItem from "../components/PostItem.tsx";
import styles from "../styles/styles.module.css";
import {posts} from "../hooks/userPostsHook.ts";

const gallerySection = () => {

    return (
        <div className={styles.gallery}>
            { posts.map(post => { <PostItem /> })}
        </div>
    );
}

export default gallerySection;