import {useState} from "react";
import Card from "../Card";
import Sidebar from "../Sidebar";
import Divider from "../common/Divider";
import {useCallback, useRef} from "react";
import {toJpeg} from "html-to-image";

export default function Workspace() {
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

  return (
    <div className="container my-5">
      <h1
        className="text-center text-4xl lg:text-5xl"
        style={{fontFamily: "Abril Fatface"}}
      >
        DESIGN YOUR GREETING CARD 🎉
      </h1>
      <Divider isTransparent={true} />

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <Sidebar
            handleBgColor={handleBgColor}
            handleText={handleText}
            handleFont={handleFont}
          />
        </div>
        <div className="col-span-8">
          <div className="flex flex-col items-center justify-center">
            <Card bgColor={bgColor} text={text} font={font} reference={ref} />
            <button
              type="button"
              className="inline-block rounded bg-primary mt-10 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={handleDownloadClick}
            >
              Download
            </button>
          </div>
        </div>
      </div>

      <Divider isTransparent={true} />
    </div>
  );
}
