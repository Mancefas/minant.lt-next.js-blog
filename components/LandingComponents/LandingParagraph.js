import { Typography, Grid, Container, Box } from "@mui/material";

const LandingParagraph = () => {
  const components = [
    {
      img: "./img/landingParagraph/sirdies-darbas-minant.lt_.png",
      alt: "dekoracija - sirdis",
      text: "Stiprinama širdies sistema",
    },
    {
      img: "./img/landingParagraph/imunine-sistema-minant.lt_.png",
      alt: "dekoracija - imuninė sistema",
      text: "Stiprinama imuninė sistema",
    },
    {
      img: "./img/landingParagraph/soc-minant.lt_.png",
      alt: "dekoracija - socialinis tinklas",
      text: "Plečiamas socialinis tinklas",
    },
    {
      img: "./img/landingParagraph/kauke-minant.lt_.png",
      alt: "dekoracija - medicininė kaukė",
      text: "Minant galima nenaudoti kaukės",
    },
    {
      img: "./img/landingParagraph/figura-minant.lt_.png",
      alt: "dekoracija - figūra",
      text: "Naikinami nereikalingi kg.",
    },
    {
      img: "./img/landingParagraph/co2-minant.lt_.png",
      alt: "dekoracija - co2 dujos",
      text: "Neišmetama CO2",
    },
  ];
  return (
    <>
      <Typography variant="h2" align="center" sx={{ marginBottom: "2rem" }}>
        Kas vyksta minant?
      </Typography>
      <Container>
        <Grid container sx={{ marginBottom: "5vh" }}>
          {components.map((elm, ind) => (
            <Grid
              key={ind}
              item
              xs={12}
              sm={10}
              md={6}
              lg={4}
              sx={{ margin: "auto" }}
            >
              <Box sx={{ textAlign: "center" }}>
                <img src={elm.img} alt={elm.alt} />
              </Box>
              <Typography variant="h6" align="center">
                {elm.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default LandingParagraph;
