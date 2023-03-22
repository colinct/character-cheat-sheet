import React, { useEffect, useState } from "react";
import { getCharacterProfile } from "../apiCalls";

interface MyCharacterProps {
  token: string;
  realm: string;
  name: string;
}

export const CharacterProfile = ({ token, realm, name }: MyCharacterProps) => {
  const [character, setCharacter] = useState<any>();

  useEffect(() => {
    const fetchCharacter = async () => {
      const characterInfo = await getCharacterProfile(token, name, realm);
      setCharacter(characterInfo);
    };
    if (token) fetchCharacter();
  }, [token, name, realm]);

  return (
    <div>
      {character && (
        <>
          <h1>{character.name}</h1>
          <h1>{character.equipped_item_level}</h1>
        </>
      )}
    </div>
  );
};
