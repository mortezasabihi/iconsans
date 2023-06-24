import { Grid, Stack, Typography } from "@mui/material";
import { useState, useRef } from "react";
import Icon from "./Icon";
import IconsSearch from "./IconsSearch";
import AntSwitch from "./AntSwitch";
import { useKeydown } from "@/hooks";
import type { TIcon } from "@/types";

interface Props {
  icons: TIcon[];
}

const IconsList: React.FC<Props> = ({ icons }) => {
  const [text, setText] = useState<string>("");
  const [style, setStyle] = useState<string>("linear");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.trim());
  };

  const renderIcons = () => {
    const searchedIcons = icons.filter(
      (icon) =>
        icon.name.toLowerCase().includes(text.toLowerCase()) &&
        icon.style === style
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
    <Grid container spacing={2} mb={10}>
      <Grid item md={12} sm={12} xs={12}>
        <Grid container spacing={2}>
          <IconsSearch
            ref={searchInputRef}
            text={text}
            onChange={handleChangeText}
          />
          <Grid item md={2} sm={3} xs={4}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Typography>Linear</Typography>
              <AntSwitch
                checked={style === "bold"}
                onChange={() =>
                  setStyle((prevValue) =>
                    prevValue === "linear" ? "bold" : "linear"
                  )
                }
                inputProps={{ "aria-label": "icon style" }}
              />
              <Typography>Bold</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      {renderIcons()}
    </Grid>
  );
};

export default IconsList;
