interface IBackgroundCircleProps {
  bgColor: string;
  handleClick: (color: string) => void;
}
export default function BackgroundCircle({
  bgColor,
  handleClick,
}: IBackgroundCircleProps) {
  return (
    <div
      className="w-8 h-8 rounded-full cursor-pointer"
      style={{background: bgColor}}
      onClick={() => handleClick(bgColor)}
    />
  );
}
