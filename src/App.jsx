import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6366f1", // indigo-500
    },
  },
});
theme = responsiveFontSizes(theme);
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
