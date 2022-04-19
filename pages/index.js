import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { Grid } from "@mui/material";

import { sortByDate } from "../utils";
import Header from "../components/Header/Header";
import PostShort from "../components/Post-short/PostShort";

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <Grid container spacing={1}>
        {posts.map((post, index) => (
          <Grid key={index} item xs={10} md={5} sx={{ margin: "auto" }}>
            <PostShort post={post} />
          </Grid>
        ))}
      </Grid>
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
