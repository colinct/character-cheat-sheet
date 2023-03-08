import axios from "axios";

export const getCharacter = async (
  realm: string,
  characterName: string,
  token: string
) => {
  const url = `https://us.api.blizzard.com/profile/wow/character/${realm}/${characterName}?namespace=profile-us&locale=en_US&access_token=${token}`;
  const response = await axios.get(url);
  return response.data;
};

export async function getCharacterProfile(
  token: string,
  characterName: string,
  realm: string
) {
  const tokenEndpoint = `https://us.api.blizzard.com/profile/wow/character/${realm}/${characterName}?namespace=profile-us&locale=en_US&access_token=${token}`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await fetch(tokenEndpoint, {
      method: "GET",
      headers: headers,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch Battle.net access token");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getBattleNetAccessToken(
  clientId: string,
  clientSecret: string
) {
  const tokenEndpoint = "https://us.battle.net/oauth/token";
  const basicAuth = btoa(`${clientId}:${clientSecret}`);
  const headers = {
    Authorization: `Basic ${basicAuth}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const body = new URLSearchParams({
    grant_type: "client_credentials",
  });

  try {
    const response = await fetch(tokenEndpoint, {
      method: "POST",
      headers: headers,
      body: body,
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
