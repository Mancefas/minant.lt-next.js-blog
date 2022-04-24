import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostFull from "../components/Post-full/PostFull";
import Layout from "../components/Layout";
import Head from "next/head";

const Post = ({ content, frontmatter }) => {
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
