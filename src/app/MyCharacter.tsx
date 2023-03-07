import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCharacterInfo } from "./apiCalls";

interface MyCharacterProps {
  token: string;
  realm: string;
  characterName: string;
}

export const MyCharacter = ({
  token,
  realm,
  characterName,
}: MyCharacterProps) => {
  const [character, setCharacter] = useState<any>();

  useEffect(() => {
    const fetchCharacter = async () => {
      const characterInfo = await getCharacter(token, characterName, realm);
      setCharacter(characterInfo);
      console.log(characterInfo);
    };
    if (token) fetchCharacter();
  }, [token, characterName, realm]);

  return <div>{character ? <h1>{character.name}</h1> : <p>Loading...</p>}</div>;
};

async function getCharacter(
  token: string,
  characterName: string,
  realm: string
) {
  const tokenEndpoint = `https://us.api.blizzard.com/profile/wow/character/${realm}/${characterName}/encounters/dungeons?namespace=profile-us&locale=en_US&access_token=${token}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    // "Content-Type": "application/x-www-form-urlencoded",
  };

  try {
    const response = await fetch(tokenEndpoint, {
      method: "GET",
      headers: headers,
    });

    if (response.ok) {
      const data = await response.json();
      const accessToken = data.access_token;
      return accessToken;
    } else {
      throw new Error("Failed to fetch Battle.net access token");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
