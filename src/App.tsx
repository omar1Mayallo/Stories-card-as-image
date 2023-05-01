import Footer from "./components/Footer";
import Header from "./components/Header";
import SettingsIcon from "./components/SettingsIcon";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

function App() {
  return (
    <>
      <SettingsIcon />
      <Header />
      <main className="">
        <Workspace />
      </main>
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
