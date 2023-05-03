export interface ISubHeadProps {
  head: string;
}
export default function SubHead({head}: ISubHeadProps) {
  return <h3 className="font-black font-serif text-lg">{head}</h3>;
}
