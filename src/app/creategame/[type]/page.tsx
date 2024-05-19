'use client'
import React from "react";
import { useParams } from "next/navigation";
const CreateGame = () => {
  const { type } = useParams();
  console.log(type);
  return (
    <div>
        
    </div>
  );
};

export default CreateGame;
