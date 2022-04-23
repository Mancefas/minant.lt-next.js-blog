import { Container } from "@mui/material";
import styles from "./PostFull.module.css";
import { marked } from "marked";

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
      </Container>
    </>
  );
};

export default PostFull;
