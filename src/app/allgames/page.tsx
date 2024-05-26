"use client";
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import { IoIosArrowBack } from "react-icons/io";

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
