import React, { useState, useEffect } from "react";
import { GameType, PlayerType } from "@/types/global";
import { useQuestionQuery } from "@/hooks/questionMutations/useQuestionQuery";
import Loader from "./Loader";
import { ADULT } from "@/constants/ExtraConstants";
import { useRouter } from "next/navigation";

export interface GameProps {
  category: string;
  players: PlayerType[];
  game: GameType;
}

const TruthOrDare: React.FC<GameProps> = ({ category, players, game }) => {
  const [type, setType] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const router = useRouter();
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
  const handleClose = () => {
    router.replace("/");
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
        <div className="gamePage">
          <h3>Truth or Dare</h3>
          <div>
            <h4>Room Name: {game.name}</h4>
            <p>Level: {game.rating === ADULT ? "Extreme" : "Normal"}</p>
          </div>
          <p id="question">{type ? question : `${players[index]?.name} Ready ?`}</p>

          {(!clicked || done) && (
            <>
              <button onClick={handleNextClick}>Yes</button>
            </>
          )}
          {clicked && (
            <>
              {!type && (
                <div className="gameButtons">
                  <button onClick={() => setType("truth")}>Truth</button>
                  <br />
                  <button onClick={() => setType("dare")}>Dare</button>
                  <br />
                </div>
              )}
              <button
                onClick={() => {
                  handleDoneClick();
                  handleIndex();
                }}
                disabled={!type}
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

export default TruthOrDare;
