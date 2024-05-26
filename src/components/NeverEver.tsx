import React, { useState, useEffect } from "react";
import { useQuestionQuery } from "@/hooks/questionMutations/useQuestionQuery";
import Loader from "./Loader";
import { GameProps } from "./TruthOrDare";
import { ADULT } from "@/constants/ExtraConstants";
import { useRouter } from "next/navigation";

const WouldYouRather: React.FC<GameProps> = ({ category, players, game }) => {
  const router = useRouter();
  const [question, setQuestion] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const { getNhieQuestion } = useQuestionQuery("", category);
  const { data, isLoading } = getNhieQuestion;
  const handleIndex = () => {
    if (index < players.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handleClose = () => {
    router.replace("/");
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
          <div>
            <h4>Room Name: {game.name}</h4>
            <p>Level: {game.rating === ADULT ? "Extreme" : "Normal"}</p>
          </div>
          <p id="question">{clicked ? question : `${players[index]?.name} Ready ?`}</p>

          {(!clicked || done) && (
            <>
              <button onClick={handleNextClick}>Yes</button>
            </>
          )}
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
          <div>
            <button id="danger" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WouldYouRather;
