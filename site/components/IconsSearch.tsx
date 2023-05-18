import { Grid, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
interface Props {
  text: string;
  handleChangeText: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

const IconsSearch: React.FC<Props> = ({ text, handleChangeText }) => {
  return (
    <Grid item md={12} sm={12} xs={12}>
      <Input
        sx={{ height: "40px" }}
        startAdornment={<SearchIcon sx={{ marginRight: "5px" }} />}
        name="text"
        value={text}
        onChange={handleChangeText}
        fullWidth
        placeholder="Search icons..."
      />
    </Grid>
  );
};

export default IconsSearch;
