import React, { useState, useEffect } from "react";
import { useQuestionQuery } from "@/hooks/questionMutations/useQuestionQuery";
import Loader from "./Loader";
import { GameProps } from "./TruthOrDare";


const WouldYouRather: React.FC<GameProps> = ({ category, players }) => {
  const [question, setQuestion] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  console.log(index);
  const { getWyrQuestion } = useQuestionQuery("", category);
  const { data, isLoading } = getWyrQuestion;
  const handleIndex = () => {
    if (index < players.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    if (!clicked) {
      setQuestion(data?.randomQuestion);
    }
  }, [data, clicked, index]);

  const handleNextClick = () => {
    setClicked(true);
    setDone(false);
  };
  
  const handleDoneClick = () => {
    setDone(true);
    setClicked(false);
    getWyrQuestion.refetch();
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {clicked ? question : `${players[index]?.name} Ready ?`}

          {(!clicked || done) && <button onClick={handleNextClick}>Yes</button>}
          {clicked && (
            <>
              <button
                onClick={() => {
                  handleDoneClick();
                  handleIndex();
                }}
              >
                Next
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default WouldYouRather;
