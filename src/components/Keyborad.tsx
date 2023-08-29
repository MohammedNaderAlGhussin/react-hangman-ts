const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboradProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};
const Keyborad = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboradProps) => {
  const active = "bg-sky-600 text-white ";
  const inactive =
    "opacity-30 hover:bg-white focus:bg-white cursor-not-allowed";
  return (
    <div className="flex flex-row  justify-center lg:justify-start flex-wrap gap-3 my-5">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isNotActive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`btn ${isActive ? active : ""} ${
              isNotActive ? inactive : ""
            }
 `}
            disabled={disabled || isActive || isNotActive}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyborad;
