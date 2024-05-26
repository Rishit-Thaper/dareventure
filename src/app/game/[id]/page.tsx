"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGameQuery } from "@/hooks/gamesMutations/useGameQuery";
import { GameType, PlayerType } from "@/types/global";
import TruthOrDare from "@/components/TruthOrDare";
import NeverEver from "@/components/NeverEver";
import WouldYouRather from "@/components/WouldYouRather";
import Loader from "@/components/Loader";
const MainGamePage = () => {
  const { id } = useParams<{ id: string }>();
  const { getSingleGame } = useGameQuery(undefined, id);
  const { data, isLoading } = getSingleGame;
  const game = data?.game?.gameData as GameType;
  const players = data?.game?.playerData as PlayerType[];
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {game && (
        <>
          {game.type === "tod" && (
            <TruthOrDare category={game.rating} players={players} game={game!}/>
          )}
          {game.type === "nhie" && (
            <NeverEver category={game.rating} players={players} game={game!}/>
          )}
          {game.type === "wyr" && (
            <WouldYouRather category={game.rating} players={players} game={game!}/>
          )}
        </>
      )}
    </>
  );
};

export default MainGamePage;
