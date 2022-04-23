import { Paper, Typography, Box } from "@mui/material";
// import Image from "next/image";
import Link from "next/link";

const PostShort = ({ post }) => {
  return (
    <>
      {post && (
        <Link href={`/blog/${post.slug}`} style={{ cursor: "pointer" }}>
          <a>
            <Paper elevation={3} sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ borderRadius: "7px 7px 0px 0px" }}
                  src={post.frontmatter.cover_img}
                  height="250vh"
                  width="100%"
                  alt=""
                />
              </Box>
              <Box sx={{ padding: "0.5rem" }}>
                <Typography
                  align="center"
                  sx={{
                    overflowWrap: "break-word",
                    typography: { xs: "body1", md: "h5", lg: "h5" },
                    color: "#708238",
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
                  <Typography sx={{ fontWeight: "700" }}>
                    {post.frontmatter.read_time}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </a>
        </Link>
      )}
    </>
  );
};

export default PostShort;
