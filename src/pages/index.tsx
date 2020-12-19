import Head from 'next/head';
import React from 'react';

const Index: React.FC = () => {
  return (
    <div>
      <Head>
        <title>TNZ blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Hello</main>

      <footer>footer</footer>
    </div>
  );
};

export default Index;
