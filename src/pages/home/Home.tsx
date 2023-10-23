import { NotesCategory } from "@components/NotesCategory";
import { SearchInput } from "@components/SearchInput";
import { ButtonAddNote } from "@components/ButtonAddNote";
import { NotesPanel } from "@components/NotesPanel";

import { HomeContainer, ContainerSubFilter } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <SearchInput />
      <ContainerSubFilter>
        <NotesCategory />
        <ButtonAddNote />
      </ContainerSubFilter>
      <NotesPanel />
    </HomeContainer>
  );
}
