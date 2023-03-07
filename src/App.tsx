import React, { useEffect, useState } from "react";
import "./App.css";
import { MyCharacter } from "./app/MyCharacter";
import { getBattleNetAccessToken } from "./app/apiCalls";

// curl -u {client_id}:{client_secret} -d grant_type=client_credentials https://oauth.battle.net/token

// curl -H "Authorization: Bearer {access_token}" https://us.api.blizzard.com/data/wow/token/?namespace=dynamic-us

function App() {
  const [token, setToken] = useState("");

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
    <div className="App">
      <MyCharacter token={token} realm="zuljin" characterName="Twinkletoezz" />
    </div>
  );
}

export default App;
