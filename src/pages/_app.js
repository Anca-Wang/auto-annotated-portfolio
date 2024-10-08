import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
    return 
    <>
    <Head>
        <link rel="icon" type="image/x-icon" href="/public/images/favicon.ico" />
    </Head>
    <Component {...pageProps} />;
    </>
}
