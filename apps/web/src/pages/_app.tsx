import { AppProps } from 'next/app';
import Head from 'next/head';
import { CoreProviders } from '@openluncher/client/core';
import './styles.css';

function CustomApp(props: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <CoreProviders {...props}>
        {(renderComponent) => renderComponent}
      </CoreProviders>
    </>
  );
}

export default CustomApp;
