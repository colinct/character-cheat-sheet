import React, { useState, useEffect } from "react";
import { getCharacterEquipment, getBattleNetAccessToken } from "../apiCalls";

interface EquipmentProps {
  token: string;
  realm: string;
  name: string;
}

const CharacterEquipment = ({ token, realm, name }: EquipmentProps) => {
  const [accessToken, setAccessToken] = useState<string>("");
  const [equipment, setEquipment] = useState([]);
  const clientId = "a8b4dd9aff4b4f9f8d75df3fa3dbbb13";
  const clientSecret = "nt0JbHAykC2GsOTsjgbvAOCPcdmP6cSS";

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getBattleNetAccessToken(clientId, clientSecret);
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
