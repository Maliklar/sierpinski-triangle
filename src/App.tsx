import Canvas from "./components/Canvas";
import SideBar from "./components/SideBar";
import styles from "./styles/home.module.scss";
function App() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Canvas />
    </div>
  );
}

export default App;
