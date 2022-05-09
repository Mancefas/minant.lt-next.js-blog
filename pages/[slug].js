import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostFull from "../components/Post-full/PostFull";
import Layout from "../components/Layout";
import Head from "next/head";

import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";
import { initGA } from "../utils/GA-utils";

import { useEffect } from "react";
import Link from "next/link";

const Post = ({ content, frontmatter }) => {
  const cookieAcepted = () => {
    initGA(process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_ANALYTICS_ID);
  };

  const cookieDeclined = () => {
    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      cookieAcepted();
    } else if (isConsent === "false") {
      cookieDeclined;
    }
  }, []);

  return (
    <>
      <Head>
        <title>minant.lt - dviračių straipsniai, maršrutai, aksesuarai.</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content={frontmatter.meta_description}></meta>
      </Head>
      <Layout>
        <PostFull content={content} />
        <CookieConsent
          buttonText="Supratau, naršau toliau"
          onAccept={cookieAcepted}
          enableDeclineButton
          declineButtonText="neleisti"
          onDecline={cookieDeclined}
          flipButtons
          style={{ opacity: "0.7" }}
          declineButtonStyle={{
            background: "#ffffff",
            color: "black",
            opacity: "0.5",
          }}
          buttonStyle={{ background: "#ffffff", opacity: "1" }}
        >
          <p>
            Šioje svetainėje naudojame slapukus, kad užtikrintume tinkamą
            svetainės veikimą, analizuotume naršymo statistiką,
            individualizuotume Jūsų naršymo patirtį bei teiktume Jums aktualius
            naujus straipsnius. <Link href="/privatumo-politika/">Plačiau</Link>
          </p>
        </CookieConsent>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}

export default Post;
