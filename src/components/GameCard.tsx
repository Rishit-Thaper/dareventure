import { ADULT, NHIE, TOD } from "@/constants/ExtraConstants";
import { GameType } from "@/types/global";
import Link from "next/link";
import React from "react";
interface GameCardProps {
  game: GameType;
}
const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="gameCard">
      <Link href={`/gamePlayers/${game._id}`}>
        <h4>Room Name: {game.name}</h4>
        <p>
          Type:{" "}
          {game.type === TOD
            ? "Truth or Dare"
            : game.type === NHIE
            ? "Never Have I Ever"
            : "Would You Rather"}
        </p>
        <p>Level: {game.rating === ADULT ? "Extreme" : "Normal"}</p>
      </Link>
    </div>
  );
};

export default GameCard;
