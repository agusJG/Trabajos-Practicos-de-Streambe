import React from 'react';
import { Segment, Image, List, Button } from 'semantic-ui-react';

const CharacterDetail = ({ character, onBack }) => {
  return (
    <Segment>
      <Button onClick={onBack} content="Back to list" />
      <Image src={character.image} size="medium" />
      <List>
        <List.Item>
          <List.Header>Name</List.Header>
          {character.name}
        </List.Item>
        <List.Item>
          <List.Header>Species</List.Header>
          {character.species}
        </List.Item>
        <List.Item>
          <List.Header>Status</List.Header>
          {character.status}
        </List.Item>
        <List.Item>
          <List.Header>Gender</List.Header>
          {character.gender}
        </List.Item>
      </List>
    </Segment>
  );
};

export default CharacterDetail;
