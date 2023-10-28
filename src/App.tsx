import { ThemeProvider } from "styled-components";

import { Home } from "@pages/home";
import { Wrapper } from "@components/Wrapper";
import { GlobalStyles } from "@components/GlobalStyles";
import { ModalProvider } from "@context/ModalProvider";
import { NotesProvider } from "@context/NotesProvider.tsx";

import theme from "theme/theme.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NotesProvider>
        <ModalProvider>
          <Wrapper>
            <Home />
          </Wrapper>
          <GlobalStyles />
        </ModalProvider>
      </NotesProvider>
    </ThemeProvider>
  );
}

export default App;
