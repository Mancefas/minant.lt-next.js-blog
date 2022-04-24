import { Container, Typography, Button, Box } from "@mui/material";
import Layout from "../components/Layout";
import Link from "next/link";

const privatumo_politika = () => {
  return (
    <Layout>
      <Container sx={{ my: "2rem" }}>
        <Typography align="center" variant="h4" sx={{ my: "1rem" }}>
          Kas yra slapukai
        </Typography>
        <Typography variant="body1">
          Slapukas – tai nedidelė teksto dalis, svetainės, kurioje lankotės,
          siunčiama naršyklei. Slapukai padeda svetainei įsiminti informaciją
          apie apsilankymą, todėl kitas apsilankymas svetainėje gali būti
          paprastesnis ir svetainė gali būti jums naudingesnė. Kai kurie arba
          visi toliau aprašyti slapukai gali būti saugomi jūsų naršyklėje.
          Norėdami tvarkyti slapukų naudojimo būdą, galite bet kuriuo metu
          atsisakyti naudoti konkrečius slapukus per „Google“ suasmeninimo
          nustatymus. Taip pat galite tvarkyti slapukus naršyklėje (nors
          mobiliesiems įrenginiams skirtose naršyklėse tai gali būti nerodoma).
          Pvz., jei naudojate „Google Chrome“ naršyklę, galite apsilankyti
          adresu chrome://settings/cookies.{" "}
        </Typography>
        <Typography variant="h5" sx={{ my: "1rem", fontWeight: "700" }}>
          Svetainėje (minant.lt) naudojami slapukai : Analizei - Google
          analytics, reklamos tikslais - Google adv.(jei naudojama reklama)
        </Typography>
        <Typography align="center" variant="h4">
          Analizei
        </Typography>
        <Typography variant="body1">
          Analizei atlikti naudojami slapukai padeda rinkti duomenis,
          leidžiančius paslaugoms suprasti, kaip naudotojai sąveikauja su
          konkrečia paslauga. Šios įžvalgos leidžia paslaugoms tobulinti turinį
          ir kurti geresnes naudotojams teikiamas funkcijas. Kai kurie slapukai
          padeda svetainėms suprasti, kaip jų lankytojai sąveikauja su
          nuosavybėmis. Pvz., sistemoje „Google Analytics“ („Google“ produkte,
          padedančiame svetainių ir programų savininkams suprasti, kaip žmonės
          sąveikauja su paslauga) naudojamas slapukų rinkinys informacijai
          rinkti ir ataskaitai apie svetainės naudojimo statistiką sistemoje
          „Google“ pateikti, asmeniškai neidentifikuojant atskirų lankytojų.
          Pagrindinis „Google Analytics“ naudojamas slapukas yra „_ga“. Slapukas
          „_ga“ leidžia paslaugai atskirti skirtingus naudotojus. Jis galioja
          dvejus metus. Jis naudojamas bet kurioje svetainėje, kurioje įdiegta
          „Google Analytics“, įskaitant „Google“ paslaugas.
        </Typography>
        <Typography align="center" variant="h4">
          Reklamai
        </Typography>
        <Typography variant="body1">
          Kai kurie slapukai naudojami norint įvertinti skelbimų ir kampanijų
          našumą bei svetainėse, kuriose lankotės, rodomų „Google“ skelbimų
          konversijų rodiklius. Pvz., slapukai, prasidedantys „_gcl_“, yra iš
          sistemos „Google Analytics“ ir jų pagrindinis tikslas – padėti
          reklamuotojams nustatyti, kiek kartų skelbimus spustelėję naudotojai
          atlieka veiksmus svetainėje, pvz., įsigyja pirkinių. Slapukai, kurie
          naudojami konversijų rodikliams vertinti, nėra naudojami skelbimams
          suasmeninti. Slapukai „_gcl_“ galioja 90 dienų.
        </Typography>
      </Container>
      <Box sx={{ textAlign: "center", marginBottom: "1rem" }}>
        <Link href="/" passHref>
          <Button variant="outlined" color="success">
            {" "}
            Atgal
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default privatumo_politika;
