import { Container, Typography } from "@mui/material";
import SetCard from "./SetCard";

export default function Set({data}) {

    return (
        <Container>
            <Typography variant="h1" sx={{ color: "white", textAlign: 'center' }}>
                Setlist
            </Typography>
            {data.map((song, index) => {
                return (
                    <SetCard    
                        key={index}
                        data={song}
                    />
                )}
            )}
        </Container>
    )
}