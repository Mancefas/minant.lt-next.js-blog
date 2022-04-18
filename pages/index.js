import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.frontmatter.title}</h3>
            <h3>{post.frontmatter.date}</h3>
            <h3>{post.frontmatter.excerpt}</h3>
            <Link href={`blog/${post.slug}`}>
              <h4>Read more</h4>
            </Link>
          </div>
        ))}
      </div>
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
