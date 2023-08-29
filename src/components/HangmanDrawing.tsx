/* eslint-disable react-refresh/only-export-components */
const HEAD = (
  <div className="w-[50px] h-[50px] rounded-full border-[10px] absolute border-black top-[50px] right-[-20px] " />
);
const BODY = (
  <div className="w-[10px] bg-black h-[100px] absolute top-[100px] right-0 " />
);
const RIGHT_ARM = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[-100px] rotate-[-30deg] origin-bottom-left" />
);
const LEFT_ARM = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right" />
);
const RIGHT_LEG = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[190px] right-[-90px] rotate-[60deg] origin-bottom-left" />
);
const LEFT_LEG = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[190px] right-0 rotate-[-60deg] origin-bottom-right" />
);

export const BODY_PARTS = [
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
];

type HangmanDrawingProps = {
  numOfGuesses: number;
};

const HangmanDrawing = ({ numOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numOfGuesses)}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[300px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
};

export default HangmanDrawing;
