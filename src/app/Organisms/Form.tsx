import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;

  &:focus {
    outline: none;
  }
`;

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
        <Input
          {...register("characterName", { required: "This field is required" })}
          type="text"
          name="characterName"
          placeholder="Character Name"
        />
        <Input
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
