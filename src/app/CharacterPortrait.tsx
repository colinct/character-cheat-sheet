import { useEffect, useState } from 'react';
import { getCharacterPortrait } from './apiCalls';

interface CharacterPortraitProps {
    token: string;
    realm: string;
    characterName: string;
  }
  
  export const CharacterPortrait = ({
    token,
    realm,
    characterName,
  }: CharacterPortraitProps) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(null);

    useEffect(() => {
        async function fetchPortrait() {
            const url = await getCharacterPortrait(token, characterName, realm);
            setThumbnailUrl(thumbnailUrl);
        }

        fetchPortrait();
    }, [token, characterName, realm]);

    console.log(thumbnailUrl)

    return (
        <div id="portrait">
            {thumbnailUrl && <img src={thumbnailUrl} alt="Character portrait" />}
        </div>
    );
}

