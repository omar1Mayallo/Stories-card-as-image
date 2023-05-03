import Footer from "./components/Footer";
import Header from "./components/Header";
import SettingsIcon from "./components/SettingsIcon";
import Workspace from "./components/Workspace";

function App() {
  return (
    <>
      <SettingsIcon />
      <Header />
      <main className="">
        <Workspace />
      </main>
      <Footer />
    </>
  );
}

export default App;
