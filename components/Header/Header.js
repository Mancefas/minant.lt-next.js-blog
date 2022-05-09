import { Container, Grid, Button } from "@mui/material";
// import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Container maxWidth="xl" sx={{ height: "fit-content", minHeight: "15vh" }}>
      <Grid container gap={1} sx={{ justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/">
            <a>
              {/* <Image
                src="/img/post/minant.lt-logotipas.png"
                width={350}
                height={100}
                alt="minant.lt logotipas"
              ></Image> */}
              <img
                src="/img/post/minant.lt-logotipas.png"
                width={250}
                height={75}
                alt="minant.lt logotipas"
              />
            </a>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Image
            src="/img/post/minant.lt-1.png"
            width={125}
            height={50}
            alt="minant.lt logotipas 2"
          ></Image> */}
          <img
            src="/img/post/minant.lt-1.png"
            width={125}
            height={50}
            alt="minant.lt logotipas 2"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/" passHref>
            <Button variant="contained" sx={{ backgroundColor: "#708238" }}>
              Pradžia
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
