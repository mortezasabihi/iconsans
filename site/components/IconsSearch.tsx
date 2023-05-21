import { Grid, Input } from "@mui/material";
import type { ChangeEventHandler, FC } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const IconsSearch: FC<Props> = ({ text, onChange }) => {
  return (
    <Grid item md={12} sm={12} xs={12}>
      <Input
        type="text"
        fullWidth
        onChange={onChange}
        placeholder="Search Icons..."
        value={text}
        startAdornment={<SearchIcon sx={{ marginRight: "5px" }} />}
      />
    </Grid>
  );
};

export default IconsSearch;
