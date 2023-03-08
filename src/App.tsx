import React, { useEffect, useState } from "react";
import "./App.css";
import { CharacterProfile } from "./app/CharacterProfile";
import { getBattleNetAccessToken } from "./app/apiCalls";

function App() {
  const [token, setToken] = useState("");
  const realm = "aegwynn";
  const characterName = "gravityfalls";

  useEffect(() => {
    const getToken = async () => {
      const clientId = "a8b4dd9aff4b4f9f8d75df3fa3dbbb13";
      const clientSecret = "nt0JbHAykC2GsOTsjgbvAOCPcdmP6cSS";
      const accessToken = await getBattleNetAccessToken(clientId, clientSecret);
      console.log(`Battle.net access token: ${accessToken}`);
      setToken(accessToken);
    };
    getToken();
  }, []);

  return (
    <>
      <div className="App">
        <CharacterProfile
          token={token}
          realm={realm}
          characterName={characterName}
        />
      </div>
    </>
  );
}

export default App;
