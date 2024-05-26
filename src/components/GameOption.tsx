import React from "react";
import Link from "next/link";
interface GameProps {
  name: string;
  url: string;
}
const GameOption: React.FC<GameProps> = ({ name, url }) => {
  return (
    <>
      <div id="game">
        <Link href={`/creategame/${url}`}>
          <p>{name}</p>
        </Link>
      </div>
    </>
  );
};

export default GameOption;
