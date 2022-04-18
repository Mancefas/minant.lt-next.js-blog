import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";

const Post = ({ frontmatter: { title, date, cover_img }, content, slug }) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Image src={cover_img} width={"250"} height={"250"} />
        {/* <img src={cover_img}></img> */}
        <div>{title}</div>
        <div>{date}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      <Link href="/">Go back</Link>
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
