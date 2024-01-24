import { Container, Typography } from "@mui/material";
import Title from "../components/Title";
import MenuButton from "../components/MenuButton";

export default function Home() {
  const title = {
    title: "Welcome to the Bass Practice App",
  };

  const button = {
    text: "Text",
    onClick: () => {
      console.log("Clicked");
    },

  }
  return (
    <>
      <Title data={title} />
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center", width: "80%" }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          This app offers the user the opportunity to keep track of the songs
          they are learning on bass guitar.
        </Typography>
      </Container>
      <MenuButton data={button} />
    </>
  );
}
