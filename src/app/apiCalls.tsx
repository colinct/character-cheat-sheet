import axios from "axios";

export const getCharacterInfo = async (realm: string, name: string) => {
  const clientSecret = process.env.client_secret;
  const url = `https://us.api.blizzard.com/wow/character/${realm}/${name}?locale=en_US&apikey=${clientSecret}`;
  const response = await axios.get(url);
  return response.data;
};

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
