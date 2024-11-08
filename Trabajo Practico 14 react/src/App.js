import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div>
      {selectedCharacter ? (
        <CharacterDetail character={selectedCharacter} onBack={() => setSelectedCharacter(null)} />
      ) : (
        <CharacterList onCharacterSelect={setSelectedCharacter} />
      )}
    </div>
  );
};

export default App;
