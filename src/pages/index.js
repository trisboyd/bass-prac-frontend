import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" component="h1" gutterBottom>
        Bass Practice App
      </Typography>
      <Typography variant="h4" gutterBottom>
        A compendium of songs to practice and track progress
      </Typography>
    </Container>
  );
}
