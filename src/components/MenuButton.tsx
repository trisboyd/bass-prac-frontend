import { Button } from "@mui/material";

export default function MenuButton({ data }) {
  const onClick = () => {
    data.onClick();
  };
  return (
    <>
      <Button
        variant="outlined"
        color="success"
        sx={{ fontSize: "30px", padding: "16px", width: '20%' }}
        onClick={onClick}
      >
        {data.text}
      </Button>
    </>
  );
}
