import { FC, ReactElement, ReactNode } from 'react';

import { AppProps } from 'next/app';
import { NextPage } from 'next';

export type PageProps = unknown;

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface CoreProvidersProps extends AppPropsWithLayout {
  children: (NextPageWithLayout: ReactNode) => ReactNode;
}

export const CoreProviders: FC<CoreProvidersProps> = (props) => {
  const { Component, children, pageProps } = props;
  console.log(pageProps);
  const getLayout = Component.getLayout ?? ((page) => page);
  const renderComponent = getLayout(<Component {...pageProps} />);

  return <>{children(renderComponent)}</>;
};
