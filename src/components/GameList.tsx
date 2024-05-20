"use client"
import React from "react";
import { creatorKey } from "@/constants/ExtraConstants";
import { getDataFromLocal } from "@/storage/storage";
import { useGameQuery } from "@/hooks/gamesMutations/useGameQuery";
import { GameType } from "@/types/global";
import GameCard from "./GameCard";

const GameList = () => {
  const id = getDataFromLocal(creatorKey);
  const { getAllGames } = useGameQuery(id!);
  const { data } = getAllGames;
  const games = data?.allGames?.allGamesData as GameType[];
  console.log(games);
  console.log(data);
  return (
    <div className="gameComponent">
      <>
        {games && games?.length > 0 ? (
          games?.map((game: GameType, key: number) => (
            <GameCard key={key} game={game} />
          ))
        ) : (
          <p>NO GAMES</p>
        )}
      </>
    </div>
  );
};

export default GameList;
