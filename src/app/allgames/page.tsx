"use client";
import { creatorKey } from "@/constants/ExtraConstants";
import { getDataFromLocal } from "@/storage/storage";
import { useGameQuery } from "@/hooks/gamesMutations/useGameQuery";
import React from "react";

const AllGames = () => {
  const id = getDataFromLocal(creatorKey);
  const { getAllGames } = useGameQuery(id!);
  const { data } = getAllGames;
  console.log(data);
  return <div>All Games Here</div>;
};

export default AllGames;
