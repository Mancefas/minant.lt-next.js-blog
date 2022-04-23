import { Container, Box, Grid } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <>
      <Grid
        container
        sx={{
          minHeight: "10vh",
          height: "fit-content",
          width: "85vw",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "solid 1px",
          borderColor: "#708238",
        }}
      >
        <Grid
          item
          xs={8}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <Link href="/privatumo-politika">
            <a>Privatumo politika</a>
          </Link>
          <Link href="/">
            <a>Susisiekti</a>
          </Link>
        </Grid>
        <Grid
          item
          xs={8}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <img
            src="/img/post/minant.lt-1.png"
            width={100}
            height={50}
            alt="minant.lt logotipas 2"
          />
        </Grid>
        <Grid
          item
          xs={8}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <a
            style={{ color: "blue" }}
            href="https://www.facebook.com/Minantlt-100110368575555"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </Grid>
      </Grid>
      <Container sx={{ textAlign: "center", padding: "0.5rem" }}>
        {yearNow} © Visos teisės saugomos
      </Container>
    </>
  );
};

export default Footer;
