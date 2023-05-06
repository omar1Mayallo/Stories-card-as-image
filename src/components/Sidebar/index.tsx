import {bgColors} from "../../assets/data/colors";
import BackgroundCircle from "../common/BackgroundCircle";
import Divider from "../common/Divider";
import SubHead from "../common/SubHead";
import "./sidebar.styles.css";
interface ISidebarProps {
  handleBgColor: (color: string) => void;
  handleText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFont: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Sidebar({
  handleBgColor,
  handleText,
  handleFont,
}: ISidebarProps) {
  return (
    <div className="sidebar max-h-80 overflow-y-auto p-3">
      {/* Text */}
      <div className="flex flex-col gap-2">
        <SubHead head="Text" />
        <textarea
          className="bg-gray-100 p-2"
          cols={10}
          rows={3}
          placeholder="Start writing ..."
          onChange={handleText}
        />
      </div>
      <Divider />
      {/* Fonts */}
      <div className="flex flex-col gap-2">
        <SubHead head="Fonts" />
        <select
          name="fonts"
          id="fonts"
          className="border p-2"
          defaultValue={"default"}
          onChange={handleFont}
        >
          <option value="default" disabled>
            Select font
          </option>
          <option value="sans-serif">sans-serif</option>
          <option value="serif">serif</option>
          <option value="monospace">monospace</option>
        </select>
      </div>
      <Divider />
      {/* Background */}
      <div className="flex flex-col gap-2">
        <SubHead head="Background" />
        <div className="flex flex-wrap gap-3 items-center justify-start border p-2">
          {bgColors.map((color, idx) => (
            <BackgroundCircle
              key={idx}
              bgColor={color}
              handleClick={handleBgColor}
            />
          ))}
        </div>
      </div>
      <Divider />
    </div>
  );
}
