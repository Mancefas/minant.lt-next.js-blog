import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { Grid, Typography } from "@mui/material";
import Head from "next/head";
import Script from "next/script";
import { initGA } from "../utils/GA-utils";
import Link from "next/link";

import { sortByDate } from "../utils";
import PostShort from "../components/Post-short/PostShort";
import Layout from "../components/Layout";
import LandingParagraph from "../components/LandingComponents/LandingParagraph";

import { useEffect } from "react";

import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";

export default function Home({ posts }) {
  // NEXT_PUBLIC in .env file to show it on exported site
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
        <meta
          name="description"
          content="Dviračių maršrutai Kaune, dviračių maršrutai Vilniuje, įvairūs straipsniai dviratininkams | Dviračių aksesuarai ir priedai"
        ></meta>
      </Head>

      <Layout>
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
        <LandingParagraph />
        <Typography align="center" variant="h3">
          Skaitiniai
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ margin: "auto", width: "70vw", marginBottom: "1rem" }}
        >
          {posts.map((post, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ margin: "auto" }}
            >
              <PostShort post={post} />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  //Getting files from post directory
  const postFiles = fs.readdirSync(path.join("posts"));

  //Getting slugs, metadata from files
  const postSlugsWithMatter = postFiles.map((filename) => {
    const slug = filename.replace(".md", "");
    //get frontmatter
    const wholeData = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(wholeData);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts: postSlugsWithMatter.sort(sortByDate),
    },
  };
}
