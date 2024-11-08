import React, { useEffect, useState } from 'react';
import { Card, Grid } from 'semantic-ui-react';

const CharacterList = ({ onCharacterSelect }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <Grid>
      {characters.map((character) => (
        <Grid.Column key={character.id} width={4}>
          <Card
            onClick={() => onCharacterSelect(character)}
            image={character.image}
            header={character.name}
            meta={`Species: ${character.species}`}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default CharacterList;
