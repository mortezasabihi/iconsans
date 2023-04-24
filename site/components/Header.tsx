import { GitHub } from "@mui/icons-material";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="relative" component="header">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="h1" color="inherit" noWrap>
          Iconsans
        </Typography>

        <Link
          href="https://github.com/mortezasabihi/iconsans"
          sx={{ color: "white" }}
        >
          <IconButton aria-label="github" color="inherit">
            <GitHub />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
