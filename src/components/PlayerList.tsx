import React from "react";
import { usePlayerQuery } from "@/hooks/playerMutatios/usePlayerQuery";
import { PlayerType } from "@/types/global";
import PlayerCard from "./PlayerCard";
import CreatePlayer from "./CreatePlayer";
interface GamePageProps {
  gameId: string | string[];
}
const PlayerList: React.FC<GamePageProps> = ({ gameId }) => {
  const { getAllPlayers } = usePlayerQuery(gameId);
  const { data } = getAllPlayers;

  const allPlayers = data?.allPlayers as PlayerType[];

  return (
    <div className="playerComponent">
      {allPlayers &&
        allPlayers.length > 0 &&
        allPlayers?.map((player: PlayerType) => (
          <PlayerCard key={player._id} player={player} />
        ))}
      <CreatePlayer gameId={gameId} />
    </div>
  );
};

export default PlayerList;
