import { Container, Box, Button } from "@mui/material";
import styles from "./PostFull.module.css";
import { marked } from "marked";
import { Link } from "@mui/material";

const PostFull = ({ content }) => {
  return (
    <>
      <Container
        sx={{
          borderRadius: "7px",
          py: "1rem",
          my: "1rem",
        }}
      >
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
        <Box sx={{ textAlign: "center" }}>
          <Link href="/" passHref style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="success">
              {" "}
              Atgal
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default PostFull;
