import React, { useState, useEffect } from "react";
import { PlayerType } from "@/types/global";
import { useQuestionQuery } from "@/hooks/questionMutations/useQuestionQuery";
import Loader from "./Loader";

export interface GameProps {
  category: string;
  players: PlayerType[];
}

const WouldYouRather: React.FC<GameProps> = ({ category, players }) => {
  const [type, setType] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Add isLoading state

  const { getTodQuestion } = useQuestionQuery(type, category);
  const { data } = getTodQuestion;

  useEffect(() => {
    setIsLoading(getTodQuestion.isLoading); // Update isLoading state
  }, [getTodQuestion.isLoading]);

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
          {type ? question : "Next Player Ready?"}
          {(!clicked || done) && <button onClick={handleNextClick}>Next</button>}
          {clicked && (
            <>
              {!type && (
                <>
                  <button onClick={() => setType("truth")}>Truth</button>
                  <button onClick={() => setType("dare")}>Dare</button>
                </>
              )}
              <button onClick={handleDoneClick} disabled={!type}>
                Done
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default WouldYouRather;
