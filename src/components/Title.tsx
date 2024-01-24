import { Container, Box, Typography } from "@mui/material";

export default function Title({ data }) {
    const styles = {
        background: 'rgb(252, 252, 252, 0.1)',
        borderRadius: '5px', 
    }
  return (
    <Box m={3} sx={styles}>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Typography variant="h1" sx={{ color: "white" }}>
          {data.title}
        </Typography>
      </Container>
    </Box>
  );
}
