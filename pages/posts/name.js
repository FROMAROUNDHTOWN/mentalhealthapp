import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function whatIsYourName() {
  return (
    <Layout home>
      <Head>
        <title>What Is Your Name?</title>
      </Head>
      <p>Let's Get To Know One Another...What Is Your Name? </p>
      <h2>
        <Link href="/">
          <a href="/">← Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
