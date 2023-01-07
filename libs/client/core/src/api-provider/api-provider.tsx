import React, { FC } from 'react';
import { cacheExchange, createClient, fetchExchange, Provider } from 'urql';

const clientApi = createClient({
  url: 'http://localhost:3333/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export const withUrqlApi = (Component: FC) => {
  return function ApiWrappedComponent({ ...restProps }) {
    return (
      <Provider value={clientApi}>
        <Component {...restProps} />
      </Provider>
    );
  };
};
