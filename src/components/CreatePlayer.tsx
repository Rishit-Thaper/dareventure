import React, { useRef } from "react";
import { usePlayerMutations } from "@/hooks/playerMutatios/usePlayerMutations";
import { PlayerType } from "@/types/global";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
interface CreatePlayerProps {
  gameId: string | string[];
}
const CreatePlayer: React.FC<CreatePlayerProps> = ({ gameId }) => {
  const { addPlayerMutation } = usePlayerMutations();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { register, reset, handleSubmit } = useForm<PlayerType>();
  const createPlayer: SubmitHandler<PlayerType> = async (formData) => {
    formData.gameId = gameId;
    addPlayerMutation.mutate(formData, {
      onSuccess: () => {
        toast.success("Player Added");
        reset();
        if (dialogRef.current) {
          dialogRef.current.close();
        }
      },
    });
  };
  const showModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <>
      <button onClick={showModal}>Add Player</button>
      <dialog ref={dialogRef}>
        <form onSubmit={handleSubmit(createPlayer)}>
          <input
            type="text"
            placeholder="Enter Player Name"
            {...register("name", {
              required: "This field is required",
              validate: (value) =>
                value.trim() !== "" || "Name cannot be just whitespace",
            })}
          />
          <button>Submit</button>
          <Link href=''><button>Start the Game</button></Link>
        </form>
      </dialog>
    </>
  );
};

export default CreatePlayer;
