import GameOption from "@/components/GameOption";
import { games } from "@/constants/ExtraConstants";
export default function Home() {
  return (
    <div className="start-page">
      {games.map((game, index) => (
        <GameOption key={index} url={game.url} name={game.gameName} />
      ))}
    </div>
  );
}
