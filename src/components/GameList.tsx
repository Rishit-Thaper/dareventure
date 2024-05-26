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
  const sortedGames = games?.slice().sort((a: GameType, b: GameType) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return (
    <div className="gameListComponent">
      <>
        {games &&
          games.length > 0 &&
          sortedGames.map((game: GameType, key: number) => (
            <GameCard key={key} game={game} />
          ))}
      </>
    </div>
  );
};

export default GameList;
