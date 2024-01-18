import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Layout } from "./components/Layout";
import { Container, CssBaseline } from "@mui/material";
import { useState } from "react";
import { isBrowser } from "react-device-detect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./Pages/About";
import { Experience } from "./Pages/Experience";
import { Skills } from "./Pages/Skills";

const theme = createTheme({
  palette: { mode: "dark", background: { default: "#1e1e1e" } },
  components: {
    MuiDivider: {
      styleOverrides: { root: { borderColor: "rgba(255, 255, 255, 0.12)" } },
    },
  },
});

export const App = () => {
  const [expanded, setExpanded] = useState(isBrowser);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={false}
        sx={{ m: 0, p: 0, overflowY: "hidden" }}
      >
        <Router>
          <Layout expanded={expanded} setExpanded={setExpanded}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </Layout>
        </Router>
      </Container>
    </ThemeProvider>
  );
};
