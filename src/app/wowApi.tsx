import axios from "axios";

export const getCharacterInfo = async (
  realm: string,
  name: string
) => {
  const clientSecret = process.env.client_secret
  const url = `https://us.api.blizzard.com/wow/character/${realm}/${name}?locale=en_US&apikey=${clientSecret}`;
  const response = await axios.get(url);
  return response.data;
};

{
  /*public string GetAccessToken(string clientId, string clientSecret)
{
    var client = new RestClient("https://eu.battle.net/oauth/token");
    var request = new RestRequest(Method.POST);
    request.AddHeader("cache-control", "no-cache");
    request.AddHeader("content-type", "application/x-www-form-urlencoded");
    request.AddParameter("application/x-www-form-urlencoded", $"grant_type=client_credentials&client_id={clientId}&client_secret={clientSecret}", ParameterType.RequestBody);
    IRestResponse response = client.Execute(request);

    var tokenResponse = JsonConvert.DeserializeObject<AccessTokenResponse>(response.Content);

    return tokenResponse.access_token;
}*/
}
