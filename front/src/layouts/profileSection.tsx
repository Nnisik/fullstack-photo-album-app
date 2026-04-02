import styles from "../styles/styles.module.css";
import NewPostBtn from "../features/profile/new_post/newPostBtn.tsx";
import NewPostForm from "../features/profile/new_post/newPostForm.tsx";
import Modal from "../components/modal.tsx";
import {useState} from "react";
import {User} from "../types/User.ts";

const ProfileSection = () => {
    let user:User;
    [user] = useState({
        username: "User",
        description: "Hi",
        profile_image: "./src/assets/images/kim-becker-EoCwQ5PerAs-unsplash.jpg"
    });

    return (
        <div className={styles.profileSection}>
            <div>
                <image className={styles.profileSection_image} src={user.profile_image} alt={"User Profile Image"}/>
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