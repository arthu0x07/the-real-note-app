import { NotesCategory } from "./components/NotesCategory";
import { SearchInput } from "./components/SearchInput";

import { HomeContainer, ContainerSubFilter } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <SearchInput />
      <ContainerSubFilter>
        <NotesCategory />
      </ContainerSubFilter>
    </HomeContainer>
  );
}
