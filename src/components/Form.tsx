import { TextField } from "@mui/material";
import { CSSProperties } from "react";
import { formInfo } from "../constants/formInfo";
import MenuButton from "./MenuButton";
import { useState } from "react";

export default function Form() {
    
  const [formData, setFormData] = useState({
      title: "",
      artist: "",
      album: "",
      genre: "",
      year: 0,
  });

  const [error, setError] = useState({
      title: false,
      artist: false,
      album: false,
      genre: false,
      year: false,
  });

  const buttonData = {
    text: "Submit",
    width: "25%",
    onClick: () => handleClick(),
  };
  
  const handleClick = () => {
    console.log(formData, error);
    setFormData({
      title: "",
      artist: "",
      album: "",
      genre: "",
      year: 0,
    });
    setError({
      title: false,
      artist: false,
      album: false,
      genre: false,
      year: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let inputValue = e.target.value;
    const isValid = inputValue.length > 0;
    setError({...error, [e.target.id]: !isValid});
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const styles: { [key: string]: CSSProperties } = {
    form: {
      backgroundColor: "rgba(0,0,0, 0.5)",
      maxWidth: "80%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "50px",
    },
    textField: {
      border: "1px solid rgba(154, 232, 157, 0.5)",
      color: "#9AE89D",
      width: "80%",
      marginBottom: "20px",
    },
    textStyles: {
      color: "white",
      fontSize: "30px",
    },
  };
  return (
    <>
      <form style={styles.form}>
        {formInfo.map((info, index) => (
          <TextField
            required
            key={index}
            type={info.label === "Year" ? "number" : "text"}
            id={info.label.toLowerCase()}
            label={info.label}
            onChange={(e) => handleChange(e)}
            value={formData[info.label.toLowerCase()]}
            error={error[info.label.toLowerCase()]}
            helperText={error[info.label.toLowerCase()] ? "This field is required" : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{ style: styles.textStyles }}
            sx={styles.textField}
            InputLabelProps={{ style: styles.textStyles }}
          />
        ))}
        <MenuButton data={buttonData} />
      </form>
    </>
  );
}
