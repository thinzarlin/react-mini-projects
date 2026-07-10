import { useState } from "react";
import Journal from "../components/CharacterCounter/Journal";
import StatsSection from "../components/CharacterCounter/StatsSection";
import BodySection from "../components/CharacterCounter/BodySection";

export default function CharacterCounter() {
  const MAX_CHAR = 10000;
  const WORDS_PER_MINUTE = 225;

  const [text, setText] = useState("");
  const [isCountSpace, setIsCountSpace] = useState(true);

  const stats = countText(text);

  function handleTextChange(e) {
    const str = e.target.value;
    if (str.length <= MAX_CHAR) {
      setText(e.target.value);
    }
  }

  function handleIsCountSpaceChange(e) {
    setIsCountSpace(e.target.checked);
  }

  function countText(str) {
    if (!str) {
      return {
        totalCharacters: 0,
        characters: 0,
        spaces: 0,
        words: 0,
        sentences: 0,
        paragraphs: 0,
        readingTime: "0s",
        topCharArr: [],
      };
    }

    const trimStr = str.trim();
    const totalCharacters = str.length;
    const paragraphsCount = getParagraphsCount(trimStr);
    const sentencesCount = getSentencesCount(trimStr);

    const wordsCount = getWordsCount(trimStr);
    const readingTime = calReadingTime(wordsCount);

    let charactersCount = 0;
    let spaceCount = 0;
    let charArr = [];
    for (const char of str) {
      if (isSpace(char)) {
        spaceCount += 1;
      }

      if (isCountSpace && !isNewLine(char)) {
        charactersCount += 1;
      } else if (!isCountSpace && !isSpace(char)) {
        charactersCount += 1;
      }

      if (!isNewLine(char) && !isSpace(char)) {
        let charObj = charArr.find((c) => c.char === char.toUpperCase());
        if (charObj) {
          charObj.count += 1;
        } else {
          charArr.push({
            char: char.toUpperCase(),
            count: 1,
          });
        }
      }
    }
    charArr.sort((a, b) => b.count - a.count);

    const topCharArr = charArr.slice(0, 10);

    return {
      totalCharacters: totalCharacters,
      characters: charactersCount,
      spaces: spaceCount,
      words: wordsCount,
      sentences: sentencesCount,
      paragraphs: paragraphsCount,
      readingTime: readingTime,
      topCharArr: topCharArr,
    };
  }

  function isSpace(char) {
    return /\s/.test(char);
  }

  function isNewLine(char) {
    return /\r\n|\r|\n/.test(char);
  }

  function calReadingTime(wordsCount) {
    const totalMinutes = wordsCount / WORDS_PER_MINUTE;

    let readingTime = "";
    if (totalMinutes < 1) {
      const seconds = Math.ceil(totalMinutes * 60);
      readingTime = `${seconds}s`;
    } else {
      readingTime = `${Math.round(totalMinutes)} min`;
    }

    return readingTime;
  }

  function textSplit(str, separator) {
    return str.split(separator).filter((w) => w !== "");
  }

  function getParagraphsCount(str) {
    return textSplit(str, /\r\n|\r|\n/).length;
  }

  function getSentencesCount(str) {
    return textSplit(str, /[.?!]/).length;
  }

  function getWordsCount(str) {
    return textSplit(str, /\s+/).length;
  }

  return (
    <>
      <h1 className="text-xl font-bold">Character Counter</h1>

      <StatsSection stats={stats} />

      <BodySection
        isCountSpace={isCountSpace}
        handleIsCountSpaceChange={handleIsCountSpaceChange}
        text={text}
        handleTextChange={handleTextChange}
        remainingChars={stats.totalCharacters + " / " + MAX_CHAR}
        topCharArr={stats.topCharArr}
      />

      <hr className="w-full h-px my-8 bg-gray-300 border-0" />

      <Journal />
    </>
  );
}
