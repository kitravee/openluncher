import { gql } from 'graphql-request';

export const GET_USER = gql`
  query GetUser($args: UserWhereUniqueInput!) {
    user(where: $args) {
      name
      email
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;
