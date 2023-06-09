import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Post App</Typography>
        <Typography variant="body1">
          Esta aplicación es una prueba de ingreso a la compañia Carvajal.
        </Typography>
        <Typography variant="body1">
          Esta prueba fue desarrollada por 
          <a
            href="https://github.com/esbgo97/cv"
            target="_blank"
            rel="noreferrer"
          >
            Edward Bustos.
          </a>
          <br />
          Esta solución está implementada con React JS, usando las siguientes
          librerias:
          <ul>
            <li>
              <strong>Redux</strong> para la gestion de estado de la aplicación
            </li>
            <li>
              <strong>Firebase</strong> para el Backend (DB NoSQL)
            </li>
            <li>
              <strong>Material UI</strong> para los estilos
            </li>
             <li>
              <strong>GitHub Pages</strong> para publicar un demo Online
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};
