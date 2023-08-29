import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import HangmanDrawing, { BODY_PARTS } from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyborad from "./components/Keyborad";

const getWord = (): string => {
  return words[Math.floor(Math.random() * words.length)];
};

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter((letter) => {
    return !wordToGuess.includes(letter);
  });

  const isLoser = incorrectLetters.length > BODY_PARTS.length;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      // simple rugular expression to match if the clicked key was a letter or not
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessedLetters]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);
  return (
    <div className=" max-w-[800px] flex flex-col justify-between items-center mx-auto">
      <div className="text-center text-[30px] my-3">
        {isWinner && "Winner, Refresh or press Enter to try again"}
        {isLoser && "Loser, Refresh or press Enter to try again"}
      </div>
      <HangmanDrawing numOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <Keyborad
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        disabled={isWinner || isLoser}
      />
    </div>
  );
}

export default App;
