import { randomCreatorId } from "@/conf/config";
import { GameType } from "@/types/global";
import { useGameMutations } from "@/hooks/gamesMutations/useGameMutations";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
interface formProps {
  type: string | string[];
}
const CreateGameForm: React.FC<formProps> = ({ type }) => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<GameType>();
  const { createGameMutation } = useGameMutations();
  const createGame: SubmitHandler<GameType> = async (formData) => {
    formData.type = type;
    formData.creatorId = randomCreatorId();
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
              value="adult"
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
      </form>
    </div>
  );
};

export default CreateGameForm;
