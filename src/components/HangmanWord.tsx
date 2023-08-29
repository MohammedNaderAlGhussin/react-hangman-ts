type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};
const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className="flex gap-3 text-[50px] font-bold uppercase mr-14">
      {wordToGuess.split("").map((el, index) => {
        return (
          <div
            className="border-b-4 min-w-[50px] border-black text-center"
            key={index}
          >
            <span
              className={`${
                guessedLetters.includes(el) || reveal ? "" : "invisible"
              }
              ${
                !guessedLetters.includes(el) && reveal
                  ? "text-red-500"
                  : "text-black"
              }`}
            >
              {el}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HangmanWord;
