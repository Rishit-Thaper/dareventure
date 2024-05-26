import React, { useState, useEffect } from "react";
import { PlayerType } from "@/types/global";
import { useQuestionQuery } from "@/hooks/questionMutations/useQuestionQuery";
import Loader from "./Loader";

export interface GameProps {
  category: string;
  players: PlayerType[];
}

const TruthOrDare: React.FC<GameProps> = ({ category, players }) => {
  const [type, setType] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  console.log(index);
  const { getTodQuestion } = useQuestionQuery(type, category);
  const { data, isLoading } = getTodQuestion;
  const handleIndex = () => {
    if (index < players.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    if (type && data) {
      setQuestion(data?.randomQuestion || "");
    }
  }, [data, type]);

  const handleNextClick = () => {
    setClicked(true);
    setDone(false);
  };

  const handleDoneClick = () => {
    setDone(true);
    setType("");
    setClicked(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {type ? question : `${players[index]?.name} Ready ?`}

          {(!clicked || done) && <button onClick={handleNextClick}>Yes</button>}
          {clicked && (
            <>
              {!type && (
                <>
                  <button onClick={() => setType("truth")}>Truth</button>
                  <button onClick={() => setType("dare")}>Dare</button>
                </>
              )}
              <button
                onClick={() => {
                  handleDoneClick();
                  handleIndex();
                }}
                disabled={!type}
              >
                Done
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default TruthOrDare;
