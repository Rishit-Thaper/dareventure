import React, { useEffect, useRef } from "react";
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
        toast.dismiss();
        toast.success("Player Added");
        reset();
        if (dialogRef.current) {
          dialogRef.current.close();
        }
      },
    });
  };
  useEffect(() => {
    if (addPlayerMutation.isPending) {
      toast.loading("Adding");
    }
  }, [addPlayerMutation.isPending]);
  const showModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      reset()
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
          <button type="submit">Add</button>
          <button type="button" id="danger" onClick={closeModal}>
            Close
          </button>
        </form>
      </dialog>
    </>
  );
};

export default CreatePlayer;
