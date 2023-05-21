import { Grid } from "@mui/material";
import { useState, useRef } from "react";
import Icon from "./Icon";
import IconsSearch from "./IconsSearch";
import { useKeydown } from "@/hooks";

interface Props {
  icons: {
    name: string;
    svg: string;
  }[];
}

const IconsList: React.FC<Props> = ({ icons }) => {
  const [text, setText] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.trim());
  };

  const renderIcons = () => {
    const searchedIcons = icons.filter((icon) =>
      icon.name.toLowerCase().includes(text.toLowerCase())
    );
    return (
      <>
        {text.length ? (
          <Grid item md={12} sm={12} xs={12}>
            {searchedIcons.length} matching results
          </Grid>
        ) : (
          <></>
        )}
        {searchedIcons.map(({ name, svg }, index) => (
          <Grid item md={2} sm={4} xs={6} key={index}>
            <Icon name={name} svg={svg} />
          </Grid>
        ))}
      </>
    );
  };

  const handleSearchKeyDown = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "f") {
      event.preventDefault();
      searchInputRef.current?.focus();
    }
  };

  useKeydown(handleSearchKeyDown);

  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      searchInputRef.current?.blur();
    }
  };

  useKeydown(handleEscapeKeyDown);

  return (
    <Grid container spacing={2}>
      <IconsSearch
        ref={searchInputRef}
        text={text}
        onChange={handleChangeText}
      />
      {renderIcons()}
    </Grid>
  );
};

export default IconsList;
