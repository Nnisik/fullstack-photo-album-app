import PostItem from "../components/PostItem.tsx";
import styles from "../styles/styles.module.css";
import {useState} from "react";

const gallerySection = () => {
    const [posts, getPosts]:any[] = useState([])

    return (
        <div className={styles.gallery}>
            { posts.map(post => { <PostItem /> })}
        </div>
    );
}

export default gallerySection;