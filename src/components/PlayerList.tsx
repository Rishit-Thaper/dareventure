import React from "react";
import { usePlayerQuery } from "@/hooks/playerMutatios/usePlayerQuery";
import { PlayerType } from "@/types/global";
interface GamePageProps {
  gameId: string | string[];
}
const GamePage: React.FC<GamePageProps> = ({ gameId }) => {
  const { getAllPlayers } = usePlayerQuery(gameId);

  const { data } = getAllPlayers;
  console.log(data);
  const allPlayers = data?.allPlayers as PlayerType[];
  console.log(data);
  console.log("allPlayer", allPlayers);
  return (
    <div>
      {allPlayers &&
        allPlayers.length === 0 &&
        allPlayers?.map((player: PlayerType) => (
          <p key={player._id}>{player.name}</p>
        ))}
    </div>
  );
};

export default GamePage;
