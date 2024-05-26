import React from "react";
import { usePlayerQuery } from "@/hooks/playerMutatios/usePlayerQuery";
import { PlayerType } from "@/types/global";
import PlayerCard from "./PlayerCard";
import CreatePlayer from "./CreatePlayer";
import Link from "next/link";
interface GamePageProps {
  gameId: string | string[];
}
const PlayerList: React.FC<GamePageProps> = ({ gameId }) => {
  const { getAllPlayers } = usePlayerQuery(gameId);
  const { data } = getAllPlayers;

  const allPlayers = data?.allPlayers as PlayerType[];
  const canStartGame = allPlayers?.length >= 2;
  return (
    <>
      <div className="playerComponent">
        {allPlayers &&
          allPlayers.length > 0 &&
          allPlayers?.map((player: PlayerType) => (
            <PlayerCard key={player._id} player={player} />
          ))}
        <CreatePlayer gameId={gameId} />
      </div>
      <div id="start">
        <Link href={`/game/${gameId}`}>
          <button disabled={!canStartGame} >
            Start the Game
          </button>
        </Link>
      </div>
    </>
  );
};

export default PlayerList;
