import HeaderSection from "./components/headerSection.tsx";
import ProfileSection from "./components/profileSection.tsx";
import GallerySection from "./components/gallerySection.tsx";
import styles from "./styles.module.css";

function App() {

  return (
    <div className={styles.app}>
      <HeaderSection />
      <ProfileSection />
      <GallerySection />
    </div>
  )
}

export default App
