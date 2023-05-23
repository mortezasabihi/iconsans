import { Grid, Input } from "@mui/material";
import { type ChangeEventHandler, type ForwardedRef, forwardRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const IconsSearch = forwardRef(
  ({ text, onChange, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Grid item md={12} sm={12} xs={12}>
        <Input
          type="search"
          fullWidth
          onChange={onChange}
          placeholder="Search Icons..."
          value={text}
          startAdornment={<SearchIcon sx={{ marginRight: "5px" }} />}
          inputRef={ref}
          {...rest}
        />
      </Grid>
    );
  }
);

export default IconsSearch;
