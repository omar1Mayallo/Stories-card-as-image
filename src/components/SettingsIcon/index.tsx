import {AiFillSetting} from "react-icons/ai";
interface ISettingsIconProps {
  toggleSidebar: () => void;
}
export default function SettingsIcon({toggleSidebar}: ISettingsIconProps) {
  return (
    <button
      className="fixed bottom-7 right-7 z-10 bg-slate-900 hidden max-md:flex items-center justify-center rounded-full cursor-pointer p-2 opacity-90 hover:opacity-100 hover:rotate-45 transition-all "
      style={{width: "50px", height: "50px"}}
      onClick={toggleSidebar}
    >
      <AiFillSetting size={30} color="white" />
    </button>
  );
}
