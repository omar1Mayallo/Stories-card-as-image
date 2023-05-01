import Card from "../Card";

export default function Workspace() {
  return (
    <div className="container my-5">
      <h1
        className="text-center text-4xl lg:text-5xl"
        style={{fontFamily: "Abril Fatface"}}
      >
        DESIGN YOUR GREETING CARD 🎉
      </h1>
      <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

      <Card />

      <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    </div>
  );
}
