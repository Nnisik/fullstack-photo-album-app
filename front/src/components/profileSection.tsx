import styles from "../styles.module.css";
import NewPostBtn from "./newPostBtn.tsx";
import NewPostForm from "./newPostForm.tsx";
import Modal from "./modal.tsx";
import {useState} from "react";

interface User {
    id?: number;
    username?: string;
    description?: string;
    profile_image?: string;
}

const ProfileSection = () => {
    const [user, setUser]:User = useState({username: "User", description: "Hi", profile_image:"../assets/images/kim-becker-EoCwQ5PerAs-unsplash.jpg"})

    return (
        <div className={styles.profileSection}>
            <div>
                <image className={styles.profileSection_image} src={user.profile_image} alt={"User Profile Image"} />
                <div className={styles.profileSection_description}>
                    <h2>{user.username}</h2>
                    <p>{user.description}</p>
                </div>
            </div>
            <NewPostBtn />
            <Modal open={false}>
                <NewPostForm />
            </Modal>
        </div>
    );
}

export default ProfileSection;