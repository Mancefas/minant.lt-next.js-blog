import { Container, Grid } from "@mui/material";
// import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Container fixed sx={{ height: "fit-content", minHeight: "15vh" }}>
      <Grid container gap={1} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={3}>
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
          xs={3}
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
      </Grid>
    </Container>
  );
};

export default Header;
