import React, { useEffect, useState } from "react";
import { CharacterProfile } from "./app/CharacterProfile";
import { getBattleNetAccessToken } from "./app/apiCalls";
// import { CharacterPortrait } from "./app/CharacterPortrait";
import { Form } from "./app/Organisms/Form";

function App() {
  const [token, setToken] = useState("");
  const [characterData, setCharacterData] = useState({
    characterName: "",
    realmSlug: "",
  });

  useEffect(() => {
    const getToken = async () => {
      const clientId = "a8b4dd9aff4b4f9f8d75df3fa3dbbb13";
      const clientSecret = "nt0JbHAykC2GsOTsjgbvAOCPcdmP6cSS";
      const accessToken = await getBattleNetAccessToken(clientId, clientSecret);
      setToken(accessToken);
    };
    getToken();
  }, []);

  const handleFormSubmit = (data: any) => {
    const lowercaseName = data.characterName.toLowerCase();
    const correctedRealm = data.realmSlug
      .replace(/'/g, "")
      .replace(/ /g, "")
      .toLowerCase();
    setCharacterData({
      characterName: lowercaseName,
      realmSlug: correctedRealm,
    });
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit} />
      {characterData && (
        <div className="App">
          <CharacterProfile
            token={token}
            name={characterData.characterName}
            realm={characterData.realmSlug}
          />
          {/* <CharacterPortrait token={token} characterName={characterName} realm={realm} /> */}
        </div>
      )}
    </>
  );
}

export default App;
