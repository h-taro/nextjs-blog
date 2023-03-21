import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src='https://connect.facebook.net/en_US/sdk.js'
                strategy='lazyOnload'
                onLoad={() => {
                    console.log('loaded');
                }}
            />

            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}