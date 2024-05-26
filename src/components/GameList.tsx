"use client";
import React from "react";
import { creatorKey } from "@/constants/ExtraConstants";
import { getDataFromLocal } from "@/storage/storage";
import { useGameQuery } from "@/hooks/gamesMutations/useGameQuery";
import { GameType } from "@/types/global";
import GameCard from "./GameCard";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const GameList = () => {
  const id = getDataFromLocal(creatorKey);
  const router = useRouter();
  const { getAllGames } = useGameQuery(id!);
  const { data, isLoading } = getAllGames;
  const games = data?.allGames?.allGamesData as GameType[];
  const handleBack = () => {
    router.replace("/");
  };
  if (!isLoading && (!games || games.length === 0)) {
    return (
      <div id="warn">
        <p id="not-found">No Games Found, Please create a new one!</p>
        <button id="danger" onClick={handleBack}>
          Go Back
        </button>
      </div>
    );
  }
  const sortedGames = games
    ?.slice()
    .sort(
      (a: GameType, b: GameType) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  return (
    <div className="gameListComponent">
      <div className="gameHeader">
        <IoIosArrowBack size={30} onClick={handleBack}/>
        <h3>All Recent games:</h3>
      </div>
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
