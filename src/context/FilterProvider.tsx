import { useNotes } from "@hooks/useNotes";
import { createContext, useEffect, useState } from "react";

export const FilterContext = createContext({} as IFilterProvider);

export function FilterProvider({ children }: IFilterProviderProps) {
  const { notes } = useNotes();
  const [filteredNotes, setFilteredNotes] = useState<INotes[]>(notes);

  const [selectedFilterCategory, setSelectedFilterCategory] =
    useState<string>("All");
  const [selectedFilterTitle, setSelectedFilterTitle] = useState<string>("");

  const providerValue = {
    filteredNotes: filteredNotes,
    handleFilterByTitle: handleFilterByTitle,
    handleFilterByCategory: handleFilterByCategory,
  };

  useEffect(() => {
    let filteredNotesByTitle = [];
    let filteredNotesByTitleAndCategory = [];

    filteredNotesByTitle = filterByTitle(selectedFilterTitle);
    filteredNotesByTitleAndCategory = filterByCategory(
      selectedFilterCategory,
      filteredNotesByTitle
    );

    setFilteredNotes(filteredNotesByTitleAndCategory);
  }, [selectedFilterCategory, selectedFilterTitle, notes]);

  function filterByCategory(category: string, preFilteredNotes: INotes[]) {
    if (category === "All") {
      return preFilteredNotes;
    }

    const filteredNotesByCategory = [];

    for (let i = 0; i < preFilteredNotes.length; i++) {
      if (preFilteredNotes[i].category === category) {
        filteredNotesByCategory[filteredNotesByCategory.length] =
          preFilteredNotes[i];
      }
    }

    return filteredNotesByCategory;
  }

  function filterByTitle(title: string) {
    if (String(title).length < 2) {
      return notes;
    }

    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regexPattern = new RegExp(escapedTitle, "i");

    const filteredNotesByTitle = [];
    for (let i = 0; i < notes.length; i++) {
      if (regexPattern.test(notes[i].title)) {
        filteredNotesByTitle[filteredNotesByTitle.length] = notes[i];
      }
    }
    return filteredNotesByTitle;
  }

  function handleFilterByTitle(title: string) {
    setSelectedFilterTitle(title);
  }

  function handleFilterByCategory(category: string) {
    setSelectedFilterCategory(category);
  }

  return (
    <FilterContext.Provider value={providerValue}>
      {children}
    </FilterContext.Provider>
  );
}

interface IFilterProvider {
  filteredNotes: INotes[];
  handleFilterByTitle: (title: string) => void;
  handleFilterByCategory: (category: string) => void;
}

interface IFilterProviderProps {
  children: string | JSX.Element | JSX.Element[];
}
