import React from "react";
import Card from "../Card";
import Sidebar from "../Sidebar";
import Divider from "../common/Divider";

interface IWorkspaceProps {
  bgColor: string;
  text: string;
  font: string;
  handleDownloadClick: () => void;
  handleBgColor: (color: string) => void;
  handleText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFont: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  reference: React.RefObject<HTMLDivElement>;
}

export default function Workspace({
  bgColor,
  text,
  font,
  handleDownloadClick,
  handleBgColor,
  handleText,
  handleFont,
  reference,
}: IWorkspaceProps) {
  return (
    <div className="container my-5">
      <h1
        className="text-center text-4xl lg:text-5xl"
        style={{fontFamily: "Abril Fatface"}}
      >
        DESIGN YOUR GREETING CARD 🎉
      </h1>
      <Divider isTransparent={true} />

      <div className="flex gap-4">
        <div className="w-4/12 max-md:hidden">
          <Sidebar
            handleBgColor={handleBgColor}
            handleText={handleText}
            handleFont={handleFont}
          />
        </div>
        <div className="w-8/12 max-md:w-full">
          <div className="flex flex-col items-center justify-center">
            <Card
              bgColor={bgColor}
              text={text}
              font={font}
              reference={reference}
            />
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
