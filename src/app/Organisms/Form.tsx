import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;

  &:focus {
    outline: none;
  }
`;

interface FormInputProps {
  characterName: string;
  realmSlug: string;
}

interface SubmitProps {
  onSubmit: SubmitHandler<FormInputProps>;
}

export const Form = ({ onSubmit }: SubmitProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputProps>();

  const onSubmitHandler = (data: FormInputProps) => {
    onSubmit(data);
  };

  return (
    <div className="form">
      <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          {...register("characterName", {
            required: "This field is required",
          })}
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
      </StyledForm>
    </div>
  );
};
