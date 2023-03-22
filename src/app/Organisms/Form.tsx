import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import CancelButton from "../Atoms/ResetButton";
import SubmitButton from "../Atoms/SubmitButton";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
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

const Buttons = styled.div`
  display: flex;
`;

interface FormInputProps {
  characterName: string;
  realmSlug: string;
}

interface SubmitProps {
  onSubmit: SubmitHandler<FormInputProps>;
}

const Form = ({ onSubmit }: SubmitProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputProps>();

  const onSubmitHandler = (data: FormInputProps) => {
    onSubmit(data);
  };

  console.log(errors);

  return (
    <div className="form">
      <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>Search your Character</h1>
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
        <Buttons>
          <CancelButton />
          <SubmitButton />
        </Buttons>
      </StyledForm>
    </div>
  );
};

export default Form;
