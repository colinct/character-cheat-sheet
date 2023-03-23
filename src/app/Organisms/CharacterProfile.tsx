import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCharacterEquipment, getCharacterProfile } from "../apiCalls";

interface MyCharacterProps {
  token: string;
  realm: string;
  name: string;
}
const Container = styled.div`
  user-select: none;
`;

export const CharacterProfile = ({ token, realm, name }: MyCharacterProps) => {
  const [character, setCharacter] = useState<any>();
  const [equipment, setEquipment] = useState<any>();

  useEffect(() => {
    const fetchCharacter = async () => {
      const characterInfo = await getCharacterProfile(token, name, realm);
      setCharacter(characterInfo);
    };
    if (token) fetchCharacter();
  }, [token, name, realm]);

  useEffect(() => {
    const fetchEquipment = async () => {
      const equipmentInfo = await getCharacterEquipment(token, name, realm);
      setEquipment(equipmentInfo);
      if (token) fetchEquipment();
    };
  }, [token, name, realm]);

  return (
    <Container>
      {character && (
        <>
          <h1>{character.name}</h1>
          <h1>{character.equipped_item_level}</h1>
        </>
      )}

      {equipment && (
        <>
          <h1>{equipment}</h1>
        </>
      )}
    </Container>
  );
};
