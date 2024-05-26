"use client";
import { randomCreatorId } from "@/conf/config";
import { GameBody } from "@/types/global";
import { useGameMutations } from "@/hooks/gamesMutations/useGameMutations";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getDataFromLocal, saveToLocal } from "@/storage/storage";
import { creatorKey } from "@/constants/ExtraConstants";
interface formProps {
  type: string | string[];
}
const CreateGameForm: React.FC<formProps> = ({ type }) => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<GameBody>();
  const { createGameMutation } = useGameMutations();
  const creatorId = getDataFromLocal(creatorKey);
  let id;
  if (!creatorId) {
    id = randomCreatorId();
    saveToLocal(creatorKey, id);
  } else {
    id = creatorId;
  }
  const handleClose = () => {
    router.replace("/");
  };
  const createGame: SubmitHandler<GameBody> = async (formData) => {
    formData.type = type;
    formData.creatorId = id;
    toast.loading("Creating Game...");
    createGameMutation.mutate(formData, {
      onSuccess: () => {
        toast.dismiss();
        toast.success("Game Created!!!");
        router.push("/allgames");
      },
    });
  };

  return (
    <div className="addForm">
      <form onSubmit={handleSubmit(createGame)}>
        <h4>Create Your Game</h4>
        <input
          type="text"
          placeholder="Enter your game name"
          {...register("name", {
            required: "This field is required",
            validate: (value) =>
              value.trim() !== "" || "Name cannot be just whitespace",
          })}
        />
        <br />
        <p>Select the Level: </p>
        <div>
          <div>
            <input
              type="radio"
              {...register("rating")}
              value="r"
              id="adult"
              required
            />
            <label htmlFor="adult">Extreme</label>
          </div>
          <div>
            <input
              type="radio"
              {...register("rating")}
              value="pg"
              id="pg"
              required
            />
            <label htmlFor="pg">Normal</label>
          </div>
        </div>
        <button type="submit">Create Game</button>
        <button type="button" onClick={handleClose} id="danger">Go Back</button>

      </form>
    </div>
  );
};

export default CreateGameForm;
