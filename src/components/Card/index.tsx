interface ICardProps {
  text: string;
  bgColor: string;
  font: string;
  reference: React.RefObject<HTMLDivElement>;
}

export default function Card({text, bgColor, font, reference}: ICardProps) {
  return (
    <div
      className="card-item flex items-center justify-center rounded bg-slate-200"
      style={{width: "300px", height: "300px", background: bgColor}}
      ref={reference}
    >
      <h1 style={{fontFamily: font}}>{text}</h1>
    </div>
  );
}
