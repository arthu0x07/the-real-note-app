import { MouseEventHandler, useState } from "react";
import * as S from "./styles";
import { useFilter } from "@hooks/useFilter";

export function NotesCategory() {
  const { handleFilterByCategory } = useFilter();

  const selectCategory = (selectedCategory: string = "") => {
    handleFilterByCategory(selectedCategory);
    setSelectedCategory(selectedCategory);
  };

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  return (
    <S.ContainerNotesCategory>
      <ButtonCategory
        title="All"
        selectedCategory={selectedCategory}
        renderSphere
        onClick={() => selectCategory("All")}
      />
      <ButtonCategory
        title="Home"
        selectedCategory={selectedCategory}
        renderSphere
        onClick={() => selectCategory("Home")}
      />
      <ButtonCategory
        title="Work"
        selectedCategory={selectedCategory}
        renderSphere
        onClick={() => selectCategory("Work")}
      />
      <ButtonCategory
        title="Personal"
        selectedCategory={selectedCategory}
        renderSphere
        onClick={() => selectCategory("Personal")}
      />
    </S.ContainerNotesCategory>
  );
}

function ButtonCategory(props: {
  title: string;
  selectedCategory: string;
  renderSphere: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  const { title, selectedCategory, onClick } = props;
  const isActive = title === selectedCategory;

  return (
    <S.ContainerButtonCategory
      isActive={isActive}
      title={title}
      onClick={onClick}
    >
      <S.TitleCategory isActive={isActive} title={title}>
        {title}
      </S.TitleCategory>
      <S.Sphere title={title} />
    </S.ContainerButtonCategory>
  );
}
