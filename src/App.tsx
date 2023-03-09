import React, { useEffect, useState } from "react";
import "./App.css";
import { CharacterProfile } from "./app/CharacterProfile";
import { getBattleNetAccessToken } from "./app/apiCalls";
import { CharacterPortrait } from "./app/CharacterPortrait";

function App() {
  const [token, setToken] = useState("");
  const realm = "aegwynn";
  const characterName = "gravityfalls";

  useEffect(() => {
    const getToken = async () => {
      const clientId = "a8b4dd9aff4b4f9f8d75df3fa3dbbb13";
      const clientSecret = "nt0JbHAykC2GsOTsjgbvAOCPcdmP6cSS";
      const accessToken = await getBattleNetAccessToken(clientId, clientSecret);
      setToken(accessToken);
    };
    getToken();
  }, []);

  return (
    <div className="App">
      <CharacterProfile
        token={token}
        realm={realm}
        characterName={characterName}
      />
      <CharacterPortrait token={token} characterName={characterName} realm={realm} />

    </div>
  );
}

export default App;
