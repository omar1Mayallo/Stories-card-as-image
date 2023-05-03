export interface IDividerProps {
  isTransparent?: boolean;
}
export default function Divider({isTransparent = false}: IDividerProps) {
  return (
    <>
      {isTransparent ? (
        <hr
          className={`my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100`}
        />
      ) : (
        <hr
          className={`my-3 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50`}
        />
      )}
    </>
  );
}
