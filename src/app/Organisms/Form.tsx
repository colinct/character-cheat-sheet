import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Input = styled.input``;

interface FormProps {}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      characterName: "",
      realmSlug: "",
    },
  });
  console.log({ errors });

  return (
    <div className="form">
      <form
        onSubmit={handleSubmit((data) => {
          console.log({ data });
        })}
      >
        <input
          {...register("characterName", { required: "This field is required" })}
          type="text"
          name="characterName"
          placeholder="Character Name"
        />
        <input
          {...register("realmSlug", { required: "This field is required" })}
          type="text"
          name="realmSlug"
          placeholder="Realm Name"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
