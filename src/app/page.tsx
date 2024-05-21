import GameOption from "@/components/GameOption";
import { games } from "@/constants/ExtraConstants";
import Link from "next/link";
export default function Home() {
  return (
    <div className="start-page">
      <div id="game">
        <Link href={`/allgames`}>
          <p>Recent Games</p>
        </Link>
      </div>
      {games.map((game, index) => (
        <GameOption key={index} url={game.url} name={game.gameName} />
      ))}
    </div>
  );
}
