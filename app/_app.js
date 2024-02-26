import '@/styles/globals.css';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return page;
    };
  return renderWithLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <NextNProgress color="black" />
      <Component {...pageProps} />
    </>
  );
}
