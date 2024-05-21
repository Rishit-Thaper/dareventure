"use client";
import React from "react";
import { creatorKey } from "@/constants/ExtraConstants";
import { getDataFromLocal } from "@/storage/storage";
import { useGameQuery } from "@/hooks/gamesMutations/useGameQuery";
import { GameType } from "@/types/global";
import GameCard from "./GameCard";

const GameList = () => {
  const id = getDataFromLocal(creatorKey);
  const { getAllGames } = useGameQuery(id!);
  const { data, isLoading } = getAllGames;
  const games = data?.allGames?.allGamesData as GameType[];

  if (!isLoading && (!games || games.length === 0)) {
    return <p>No Games Found</p>;
  }

  return (
    <div className="gameListComponent">
      <>
        {games &&
          games.length > 0 &&
          games.map((game: GameType, key: number) => (
            <GameCard key={key} game={game} />
          ))}
      </>
    </div>
  );
};

export default GameList;
