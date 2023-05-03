import Divider from "../common/Divider";
import SubHead from "../common/SubHead";

export default function Sidebar() {
  return (
    <div className="max-h-80 overflow-y-auto p-3">
      {/* Text */}
      <div className="flex flex-col gap-2">
        <SubHead head="Text" />
        <textarea
          className="bg-gray-100 p-2"
          cols={10}
          rows={3}
          placeholder="Start writing ..."
        ></textarea>
      </div>
      <Divider />
      {/* Position */}
      <div className="flex flex-col gap-2">
        <SubHead head="Position" />
        <div className="border p-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <label className="text-gray-600 font-black">top </label>
            <input type="number" className="border p-1" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-gray-600 font-black">bottom </label>
            <input type="number" className="border p-1" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-gray-600 font-black">left </label>
            <input type="number" className="border p-1" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-gray-600 font-black">right </label>
            <input type="number" className="border p-1" />
          </div>
        </div>
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
          <div className="bg-gray-500 w-8 h-8 rounded-full cursor-pointer" />
          <div className="bg-gray-500 w-8 h-8 rounded-full cursor-pointer" />
          <div className="bg-gray-500 w-8 h-8 rounded-full cursor-pointer" />
          <div className="bg-gray-500 w-8 h-8 rounded-full cursor-pointer" />
          <div className="bg-gray-500 w-8 h-8 rounded-full cursor-pointer" />
          <div className="bg-gray-500 w-8 h-8 rounded-full cursor-pointer" />
          <div className="bg-gray-500 w-8 h-8 rounded-full cursor-pointer" />
          <div className="bg-gray-500 w-8 h-8 rounded-full cursor-pointer" />
          <div className="bg-gray-500 w-8 h-8 rounded-full cursor-pointer" />
          <div className="bg-gray-500 w-8 h-8 rounded-full cursor-pointer" />
          <div className="bg-gray-500 w-8 h-8 rounded-full cursor-pointer" />
        </div>
      </div>
      <Divider />
    </div>
  );
}
