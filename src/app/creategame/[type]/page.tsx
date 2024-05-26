"use client";
import React from "react";
import { useParams } from "next/navigation";
import CreateGameForm from "@/components/CreateGameForm";
const CreateGame = () => {
  const {type} = useParams();
  console.log(type);
  return (
    <div>
      <CreateGameForm type={type} />
    </div>
  );
};

export default CreateGame;
