import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function about() {
  return (
    <Layout home>
      <Head>
        <title>Mental Health For The AAPI Community</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Mental Health! <a href="posts/name">Let's begin...</a>
        </p>
      </section>
    </Layout>
  );
}
