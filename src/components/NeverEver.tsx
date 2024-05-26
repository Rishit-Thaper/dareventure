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
  const { getNhieQuestion } = useQuestionQuery("", category);
  const { data, isLoading } = getNhieQuestion;
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
    getNhieQuestion.refetch();
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="gamePage">
          <h3>Never Have I Ever</h3>
          <p>{clicked ? question : `${players[index]?.name} Ready ?`}</p>

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
        </div>
      )}
    </>
  );
};

export default WouldYouRather;
