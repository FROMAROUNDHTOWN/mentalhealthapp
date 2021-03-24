import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function getStarted() {
  return (
    <Layout home>
      <Head>
        <title>Pick A Topic</title>
      </Head>
      <p>
        You Can Choose Either Topic Below Or Push The Random Button If You're
        Feeling Lucky!
      </p>
      <h2>
        <Link href="/">
          <a href="/">← Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
