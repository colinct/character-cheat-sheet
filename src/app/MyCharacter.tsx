import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCharacterInfo } from "./wowApi";

interface MyCharacter {
  realm: string;
  name: string;
}

export const MyCharacter = ({
  apiKey,
  realm,
  name,
}: {
  apiKey: string;
  realm: string;
  name: string;
}) => {
  const [character, setCharacter] = useState<any>();

  useEffect(() => {
    const fetchCharacter = async () => {
      const characterInfo = await getCharacterInfo(apiKey, realm, name);
      setCharacter(characterInfo);
    };
    fetchCharacter();
  }, [apiKey, realm, name]);

  return <div>{character ? <h1>{character.name}</h1> : <p>Loading...</p>}</div>;
};
