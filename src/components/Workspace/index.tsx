import Card from "../Card";
import Sidebar from "../Sidebar";
import Divider from "../common/Divider";

export default function Workspace() {
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
          <Sidebar />
        </div>
        <div className="col-span-8">
          <Card />
        </div>
      </div>

      <Divider isTransparent={true} />
    </div>
  );
}
