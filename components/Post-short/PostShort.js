import { Paper, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const PostShort = ({ post }) => {
  return (
    <>
      {post && (
        <Link href={`blog/${post.slug}`}>
          <Paper elevation={3} sx={{ padding: "0.5rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={post.frontmatter.cover_img}
                width={"250"}
                height={"250"}
              />
            </Box>
            <Typography
              sx={{
                overflowWrap: "break-word",
                typography: { xs: "body1", md: "h5", lg: "h5" },
              }}
            >
              {post.frontmatter.title}
            </Typography>
            <Typography
              sx={{
                overflowWrap: "break-word",
                typography: { xs: "body2", md: "h6" },
              }}
            >
              {post.frontmatter.excerpt}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>{post.frontmatter.date}</Typography>
              <Typography>{post.frontmatter.read_time}</Typography>
            </Box>
          </Paper>
        </Link>
      )}
    </>
  );
};

export default PostShort;
