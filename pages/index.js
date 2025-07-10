import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import css from "../styles/Home.module.css";
import Services from "../components/Services";

import Books from "../components/Books";

export default function Home() {
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>myStories</title>
          <meta name="description" content="myStories" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
          <Hero />
          <Services />
          <Books />
        </main>
      </div>
    </Layout>
  );
}
