import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCharacterProfile } from "./apiCalls";

interface MyCharacterProps {
  token: string;
  realm: string;
  characterName: string;
}

export const CharacterProfile = ({
  token,
  realm,
  characterName,
}: MyCharacterProps) => {
  const [character, setCharacter] = useState<any>();

  useEffect(() => {
    const fetchCharacter = async () => {
      const characterInfo = await getCharacterProfile(
        token,
        characterName,
        realm
      );
      setCharacter(characterInfo);
    };
    if (token) fetchCharacter();
  }, [token, characterName, realm]);

  return <div>{character ? <h1>{character.name}</h1> : <p>Loading...</p>}</div>;
};
