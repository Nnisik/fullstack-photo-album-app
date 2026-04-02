import HeaderSection from "./layouts/headerSection.tsx";
import styles from "./styles/styles.module.css";
import ProfilePage from "./pages/profilePage.tsx";

function App() {
    return (
        <div className={styles.app}>
            <HeaderSection />
            <ProfilePage />
        </div>
    );
}

export default App
