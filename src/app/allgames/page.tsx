"use client";
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";

const GameList = dynamic(() => import("@/components/GameList"), {
  loading: () => <Loader />,
  ssr: false,
});

const AllGames = () => {
  return (
    <div className="gameComponent">
      <GameList />
    </div>
  );
};

export default AllGames;
