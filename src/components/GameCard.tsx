import { GameType } from "@/types/global";
import React from "react";
interface GameCardProps {
  game: GameType;
}
const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return <div>{game.name}</div>;
};

export default GameCard;
