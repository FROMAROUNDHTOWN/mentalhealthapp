import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function contact() {
  return (
    <Layout home>
      <Head>
        <title>Contact Us</title>
      </Head>
      <p>Please reach out and provide feedback</p>
      <h2>
        <Link href="/">
          <a href="/">← Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
