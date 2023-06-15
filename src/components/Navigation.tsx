import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { routes } from "../pages/routes";
import { Link } from "react-router-dom";

export const Navigation = (props: any) => {
  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  const [authenticate, setAuthenticate] = React.useState(true);

  const handleDrawerToggle = () => {
    // setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Post App - (Carvajal)
          </Link>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {authenticate ? <SignedInRoutes /> : <SignedOutRoutes />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const SignedInRoutes = () => {
  return (
    <>
      {routes
        .filter((r) => !["/login", "/register", "/post/:id"].includes(r.path))
        .map((item: any, index: number) => (
          <Link key={index} style={{ textDecoration: "none" }} to={item.path}>
            <Button sx={{ color: "#fff" }}>{item.name}</Button>
          </Link>
        ))}
    </>
  );
};

const SignedOutRoutes = () => {
  return (
    <>
      {routes
        .filter((r) => !["/post/:id", "/posts"].includes(r.path))
        .map((item: any, index: number) => (
          <Link key={index} style={{ textDecoration: "none" }} to={item.path}>
            <Button sx={{ color: "#fff" }}>{item.name}</Button>
          </Link>
        ))}
    </>
  );
};
