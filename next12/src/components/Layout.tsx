import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          <li>
            <h2>
              <Link href="/">
                <a>SSR</a>
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link href="/ssg">
                <a>SSG</a>
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link href="/isr">
                <a>ISR</a>
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link href="/csr">
                <a>CSR</a>
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link href="/images">
                <a>Image 최적화 - NextJS 이미지 확인</a>
              </Link>
            </h2>
          </li>
        </ul>
        {children}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Layout;