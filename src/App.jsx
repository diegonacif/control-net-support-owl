import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ProceduresProvider } from "./contexts/ProceduresContext";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ProceduresProvider>
          <Router />
          <GlobalStyle />
        </ProceduresProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

