import * as Types from '@openluncher/client/generated/graphql-types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
export type GetUserQueryVariables = Types.Exact<{
  args: Types.UserWhereUniqueInput;
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', name?: string | null, email: string } };

export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name?: string | null, email: string }> };


export const GetUserDocument = `
    query GetUser($args: UserWhereUniqueInput!) {
  user(where: $args) {
    name
    email
  }
}
    `;
export const useGetUserQuery = <
      TData = GetUserQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: GetUserQueryVariables,
      options?: UseQueryOptions<GetUserQuery, TError, TData>
    ) =>
    useQuery<GetUserQuery, TError, TData>(
      ['GetUser', variables],
      fetcher<GetUserQuery, GetUserQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUserDocument, variables),
      options
    );
export const GetUsersDocument = `
    query GetUsers {
  users {
    id
    name
    email
  }
}
    `;
export const useGetUsersQuery = <
      TData = GetUsersQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetUsersQueryVariables,
      options?: UseQueryOptions<GetUsersQuery, TError, TData>
    ) =>
    useQuery<GetUsersQuery, TError, TData>(
      variables === undefined ? ['GetUsers'] : ['GetUsers', variables],
      fetcher<GetUsersQuery, GetUsersQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUsersDocument, variables),
      options
    );