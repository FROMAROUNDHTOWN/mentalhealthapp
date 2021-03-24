import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function about() {
  return (
    <Layout home>
      <Head>
        <title>About Us</title>
      </Head>
      <h1>About Us</h1>
      <h2>
        <Link href="/">
          <a href="/">← Back to home</a>
        </Link>
      </h2>
      <p> Hi! I'm Kween!</p>
    </Layout>
  );
}
