import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Login = () => {
  const onSend = () => {};
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Card elevation={4}>
          <CardContent>
            <Typography variant="h4" color="primary">
              Iniciar Sesión
            </Typography>
            <Typography variant="body1">
              Ingresa tu usuario (Email) y contraseña para ingresar y comenzar a
              publicar!
            </Typography>

            <br />
            <TextField
              label="Email"
              type="email"
              variant="standard"
              fullWidth
            />

            <br />
            <br />
            <TextField
              label="Contraseña"
              type="password"
              variant="standard"
              fullWidth
            />

            <br />
            <br />
            <Button variant="contained">Entrar</Button>
            <Link to="/register" style={{ textDecoration: "nonte" }}>
              <Button>Registrarme</Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};
