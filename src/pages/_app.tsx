import { ThemeProvider } from "@mui/material";
import theme from "../../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";
import bassImage from "../../public/bass_image.jpg";
import Image from "next/image";
import MenuButton from "../components/MenuButton";

export default function App({ Component, pageProps }: AppProps) {
    // TODO: this a placeholder for a more robust menu
    const homeData = {
        text: 'Home',
        path: '/',
    }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Image
          src={bassImage.src}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          style = {{
            zIndex: -1,
            maxWidth: '1400px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.7,
          }}
        />
        <MenuButton data ={homeData} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
