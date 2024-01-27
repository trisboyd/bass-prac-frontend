import { Container, Grid } from "@mui/material";
import MenuButton from "./MenuButton";
import { buttonType } from "../types/types";

export default function Navigation({ data }: { data: buttonType[] }) {
  return (
    <Container sx={{margin: 'auto', display: 'flex', justifyContent: 'center', zIndex: 100}}>
      <Grid container spacing={2} sx={{ padding: "10px" }}>
        {data.map((item: buttonType) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MenuButton data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
