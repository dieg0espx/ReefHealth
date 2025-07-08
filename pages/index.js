import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home');
  }, [router]);

  return (
    <>
      <Head>
        <title>Reef Health Benefits - Affordable Small Business Health Insurance</title>
        <meta name="description" content="Affordable small business health insurance starting at $29/mo. Save up to 40% with transparent pricing and 24/7 telehealth access. Trusted by 100,000+ members." />
        <link rel="canonical" href="https://reefhealth.com/" />
        <meta name="robots" content="index, follow" />
      </Head>
      {null}
    </>
  );
}
