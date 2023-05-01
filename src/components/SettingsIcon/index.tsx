import {AiFillSetting} from "react-icons/ai";
export default function SettingsIcon() {
  return (
    <button
      className="fixed bottom-7 right-7 z-10 bg-slate-900 lg:hidden flex items-center justify-center rounded-full cursor-pointer p-2 opacity-90 hover:opacity-100 hover:rotate-45 transition-all "
      style={{width: "50px", height: "50px"}}
    >
      <AiFillSetting size={30} color="white" />
    </button>
  );
}
