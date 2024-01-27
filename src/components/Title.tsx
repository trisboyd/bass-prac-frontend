import { Container, Box, Typography } from "@mui/material";

export default function Title({ data }) {
    const styles = {
        margin: '30px, auto',
        width: '100%',
        zIndex: 100,
    }
  return (
    <Container sx={styles} maxWidth="lg">
      <Container
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Typography variant="h1" sx={{ color: "white", textAlign: 'center' }}>
          {data.title}
        </Typography>
      </Container>
    </Container>
  );
}
