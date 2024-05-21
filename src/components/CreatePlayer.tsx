import React from "react";
import { useParams } from "next/navigation";
import { usePlayerMutations } from "@/hooks/playerMutatios/usePlayerMutations";
import { usePlayerQuery } from "@/hooks/playerMutatios/usePlayerQuery";
const GamePage = () => {
  const { id } = useParams();
  const { addPlayerMutation, deletePlayerMutation } = usePlayerMutations();

  return <div>{id}</div>;
};

export default GamePage;
