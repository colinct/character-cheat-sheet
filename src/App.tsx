import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CharacterProfile } from "./app/Organisms/CharacterProfile";
import { getBattleNetAccessToken } from "./app/apiCalls";
// import { CharacterPortrait } from "./app/CharacterPortrait";
import Form from "./app/Organisms/Form";
import Modal from "./app/Molecules/Modal";

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
`;

function App() {
  const [token, setToken] = useState("");
  const [open, setOpen] = useState(true);
  const [characterData, setCharacterData] = useState({
    name: "",
    realm: "",
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
      name: lowercaseName,
      realm: correctedRealm,
    });
  };

  return (
    <div>
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Form onSubmit={handleFormSubmit} />
      </Modal>

      {characterData && (
        <div className="App">
          <CharacterProfile
            token={token}
            name={characterData.name}
            realm={characterData.realm}
          />
          {/* <CharacterPortrait token={token} characterName={characterName} realm={realm} /> */}
        </div>
      )}
    </div>
  );
}

export default App;
