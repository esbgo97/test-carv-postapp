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

export const Register = () => {
  const onSend = () => {};

  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Card elevation={4}>
          <CardContent>
            <Typography variant="h4" color="primary">
              Registrarme
            </Typography>
            <Typography variant="body1">
              Crea un usuario para poder interactuar con las publicacones de
              otras personas.
            </Typography>

            <br />
            <TextField
              label="Nombre (ó apodo si te sientes mejor)"
              type="email"
              variant="standard"
              fullWidth
            />

            <br />
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
            <Button variant="contained" onClick={onSend}>
              Entrar
            </Button>
            <Link to="/login" style={{ textDecoration: "nonte" }}>
              <Button>¿Ya tienes cuenta?</Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};
