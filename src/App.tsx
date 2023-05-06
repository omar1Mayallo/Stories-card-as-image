import {useState} from "react";
import {useCallback, useRef} from "react";
import {toJpeg} from "html-to-image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SettingsIcon from "./components/SettingsIcon";
import Workspace from "./components/Workspace";
import Sidebar from "./components/Sidebar";

function App() {
  const [bgColor, setBgColor] = useState<string>("#d9d9d9");
  const [text, setText] = useState<string>("Start writing ...");
  const [font, setFont] = useState<string>("serif");

  const ref = useRef<HTMLDivElement>(null);
  // HANDLE_DOWNLOAD
  const handleDownloadClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    // console.log(ref.current);

    toJpeg(ref.current, {
      cacheBust: true,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "new-card.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  // HANDLE_BACKGROUND_COLOR
  const handleBgColor = (color: string): void => {
    // console.log(color);
    setBgColor(color);
  };
  // HANDLE_TEXT
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  // HANDLE_FONT
  const handleFont = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    // console.log(e.target.value);
    setFont(e.target.value);
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SettingsIcon toggleSidebar={toggleSidebar} />
      {isOpen && (
        <Sidebar
          handleBgColor={handleBgColor}
          handleText={handleText}
          handleFont={handleFont}
        />
      )}
      <Header />
      <main className="">
        <Workspace
          bgColor={bgColor}
          text={text}
          font={font}
          handleDownloadClick={handleDownloadClick}
          handleBgColor={handleBgColor}
          handleText={handleText}
          handleFont={handleFont}
          reference={ref}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
