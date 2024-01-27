import { Container, Typography } from "@mui/material";
import Title from "../components/Title";
import { buttons as buttonContent } from "../constants/buttonContent";
import Navigation from "../components/Navigation";
import bassImage from "../../public/bass_image.jpg";
import Image from "next/image";

export default function Home() {
  const title = {
    title: "Welcome to the Bass Practice App",
  };

  const styles = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    minHeight: "100vh",
  };

  return (
    <>
      <Container maxWidth="lg" sx={styles}>
        <Title data={title} />
        <Container disableGutters sx={{zIndex: 100}}>
          <Typography
            variant="h4"
            sx={{ color: "white", marginBottom: "50px" }}
          >
            This app offers the user the opportunity to keep track of the songs
            they are learning on bass guitar.
          </Typography>
          <Navigation data={buttonContent} />
        </Container>
      </Container>
    </>
  );
}
