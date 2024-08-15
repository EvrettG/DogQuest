import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $password: String!) {
    addUser(userName: $userName, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_GAME = gql`
  mutation saveGame($input: GameInput!) {
    saveGame(input: $input) {
      _id
      userName
      savedGame {
        bones
        activeHole
        holes {
          id
          xp
          level
          baseValue
        }
        upgrades {
          id
          level
          cost
        }
      }
    }
  }
`;