import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function MenuButton({ data }) {
  const router = useRouter();
  const onClick = () => {
    data.path ? router.push(data.path) : data.onClick();
  };

  const styles = {
    fontSize: "30px",
    padding: "16px",
    width: "100%",
    height: "100%",
    color: "#9AE89D",
    border: "1px solid rgba(154, 232, 157, 0.5)",
  };

  return (
    <>
      <Button
        variant="outlined"
        color="success"
        sx={styles}
        onClick={onClick}
        style={{ textTransform: "none" }}
      >
        {data.text}
      </Button>
    </>
  );
}
