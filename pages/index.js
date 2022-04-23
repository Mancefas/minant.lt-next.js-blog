import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { Grid, Typography } from "@mui/material";
import Head from "next/head";

import { sortByDate } from "../utils";
import PostShort from "../components/Post-short/PostShort";
import Layout from "../components/Layout";
import LandingParagraph from "../components/LandingComponents/LandingParagraph";

export default function Home({ posts }) {
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
            <Grid key={index} item xs={12} md={4} sx={{ margin: "auto" }}>
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
