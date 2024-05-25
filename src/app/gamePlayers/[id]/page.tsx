"use client";
import React from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";

const PlayerList = dynamic(() => import("@/components/PlayerList"), {
  loading: () => <Loader />,
  ssr: false,
});
const GamePage = () => {
  const { id } = useParams();

  return (
    <>
      <PlayerList gameId={id} />
    </>
  );
};

export default GamePage;
