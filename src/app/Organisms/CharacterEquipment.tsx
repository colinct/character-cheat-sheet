import React, { useState, useEffect } from "react";
import {
  Equipment,
  getBattleNetAccessToken,
  getCharacterEquipment,
} from "../apiCalls";

interface EquipmentProps {
  token: string;
  realm: string;
  name: string;
}

const CharacterEquipment = ({ token, realm, name }: EquipmentProps) => {
  const [accessToken, setAccessToken] = useState<string>("");
  const [equipment, setEquipment] = useState<Equipment[]>([]);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getBattleNetAccessToken();
      setAccessToken(token);
    };
    console.log({ token });
    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      const fetchEquipment = async () => {
        const characterEquipment = await getCharacterEquipment(
          realm,
          name,
          token
        );
        setEquipment(characterEquipment);
        console.log({ realm, name, token, characterEquipment, equipment });
      };

      fetchEquipment();
    }
  }, [token, name, realm]);

  return <>{equipment && <>{equipment}</>}</>;
};

export default CharacterEquipment;
