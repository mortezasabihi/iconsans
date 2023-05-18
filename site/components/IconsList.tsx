import { Grid } from "@mui/material";
import { useState } from "react";
import Icon from "./Icon";
import IconsSearch from "./IconsSearch";

interface Props {
  icons: {
    name: string;
    svg: string;
  }[];
}

const IconsList: React.FC<Props> = ({ icons }) => {
  const [text, setText] = useState<string>("");
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.trim());
  };

  const renderIcons = () => {
    const searchedIcons = icons.filter((icon) =>
      icon.name.toLowerCase().includes(text.toLowerCase())
    );

    if (!searchedIcons.length) {
      return (
        <Grid item md={12} sm={12} xs={12}>
          Nothing match results
        </Grid>
      );
    }

    return searchedIcons.map(({ name, svg }, index) => (
      <Grid item md={2} sm={4} xs={6} key={index}>
        <Icon name={name} svg={svg} />
      </Grid>
    ));
  };
  return (
    <Grid container spacing={2}>
      <IconsSearch text={text} handleChangeText={handleChangeText} />
      {renderIcons()}
    </Grid>
  );
};

export default IconsList;
