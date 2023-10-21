import { Home } from "@pages/home";
import { Wrapper } from "@components/Wrapper";
import { GlobalStyles } from "@components/GlobalStyles";

function App() {
  return (
    <>
        <Wrapper>
          <Home />
        </Wrapper>
        <GlobalStyles />
    </>
  );
}

export default App;
