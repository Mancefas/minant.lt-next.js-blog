import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
// import Image from "next/image";
import Link from "next/link";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const PostShort = ({ post }) => {
  return (
    <>
      {post && (
        <Link href={`/${post.slug}`} style={{ cursor: "pointer" }}>
          <a>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.frontmatter.cover_img}
                  alt=""
                />
                <CardContent>
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
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>{post.frontmatter.date}</Typography>
                    <Box sx={{ display: "flex" }}>
                      <AutoStoriesIcon fontSize="small" color="success" />
                      <Typography
                        sx={{ fontWeight: "700", marginLeft: "0.5rem" }}
                      >
                        {post.frontmatter.read_time}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </Link>
      )}
    </>
  );
};

export default PostShort;
