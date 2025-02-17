import { useCallback, useState } from "react";
import { useDebounce } from "@hooks/useDebounce";
import { useFilter } from "@hooks/useFilter";

import { ContainerInput, SearchImage, PlaceHolder, Input } from "./styles";
import Search from "@assets/search.svg";

export function SearchInput() {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const [inputSearchText, setInputSearchText] = useState<string>("");

  const debouncedHandleSearch = useDebounce(handleSearch, 1000);
  const { handleFilterByTitle } = useFilter();

  function handleActiveInput() {
    setIsInputActive(true);
  }

  function handleInputBlur() {
    handleDisableInput();
    handleSearch();

    function handleDisableInput() {
      Boolean(!inputSearchText) && setIsInputActive(false);
    }
  }

  function handleSearch() {
    handleFilterByTitle(inputSearchText);
  }

  const handleInputOnchange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (String(e.target.value) === "") {
        handleSearch();
      }

      setInputSearchText(e.target.value);
      debouncedHandleSearch();
    },
    [debouncedHandleSearch]
  );

  return (
    <ContainerInput onClick={handleActiveInput} onBlur={handleInputBlur}>
      {!isInputActive && (
        <>
          <SearchImage src={Search} alt="Icone de Pesquisa" />
          <PlaceHolder>Search Notes...</PlaceHolder>
        </>
      )}
      <Input onChange={handleInputOnchange} />
    </ContainerInput>
  );
}
