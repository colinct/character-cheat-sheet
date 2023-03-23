import { off } from "process";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import CancelButton from "../Atoms/ResetButton";
import SubmitButton from "../Atoms/SubmitButton";

const StyledForm = styled.form`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  border-radius: 5px;
  background-color: #999999;
  width: 350px;
  padding: 10px;
  font-family: "Roboto", sans-serif;

  &:focus {
    caret-color: white;
  }
`;

const StyledHeader = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 550;
  user-select: none;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  border: 1px solid white;
  border-radius: 3px;
  padding: 5px;
  margin: 5px;
  background-color: transparent;
  color: white;
  width: 93.5%;
  height: 30px;

  ::placeholder {
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

const InputRegion = styled(Input)`
  width: 50px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  user-select: none;
`;

interface FormInputProps {
  characterName: string;
  realmSlug: string;
  region: string;
  class: string;
  race: string;
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
      <StyledForm onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
        <StyledHeader>Search Your Character</StyledHeader>
        <Input
          {...register("characterName", {
            required: "This field is required",
          })}
          type="text"
          name="characterName"
          placeholder="Character Name"
        />
        <InputRow>
          <InputRegion
            {...register("region", { required: false })}
            type="text"
            name="region"
            placeholder="Region"
          />
          <Input
            {...register("realmSlug", { required: "This field is required" })}
            type="text"
            name="realmSlug"
            placeholder="Realm Name"
          />
        </InputRow>
        <Input
          {...register("class", { required: false })}
          type="text"
          name="class"
          placeholder="Character Class"
        />
        <Input
          {...register("race", { required: false })}
          type="text"
          name="race"
          placeholder="Character Race"
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
