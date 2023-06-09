import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  TextField,
  Divider,
  ListItemText,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Edit, Send } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { ADD_COMMENT, GET_POST_BY_ID } from "../../services/PostsService";
import { serverTimestamp } from "firebase/firestore";

export const Post = (props: any) => {
  const { id } = useParams();
  const initialPostState = {
    title: "Titulo de Prueba",
    content: "Contenido de Prueba",
    author: { id: "", name: "" },
    createAt: null as any,
  };

  const [post, setPost] = useState(initialPostState);
  const [comment, setComment] = useState("");
  useEffect(() => {
    GET_POST_BY_ID(id ?? "").then((resp) => {
      if (resp) {
        setPost(resp);
      }
    });
  }, []);
  // const { title, content } = props;

  const onAddComment = async () => {
    console.log(comment);
    var result = await ADD_COMMENT(id ?? "", comment);
    if (result) {
      alert("se agrego el comentario correctamente!");
    }
  };

  const { title, content, author, createAt } = post;

  return (
    <Grid container>
      <Grid item xs={2} />

      <Grid item xs={8}>
        <Card elevation={4}>
          <CardContent>
            <Typography variant="h5" color="primary">
              {title}
            </Typography>

            <Typography variant="body1">{content}</Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2" color="gray">
                {author.name}
              </Typography>
              <Typography variant="subtitle2" color="gray">
                {createAt?.toDate().toLocaleString()}
              </Typography>
            </Box>
            <br />

            <Typography variant="h6" color="primary">
              Comentarios
            </Typography>

            <List>
              <ListItem>
                <TextField
                  label="Nuevo Comentario"
                  variant="standard"
                  fullWidth
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Edit />
                      </InputAdornment>
                    ),
                  }}
                />
                <IconButton onClick={onAddComment}>
                  <Send />
                </IconButton>
              </ListItem>
              <Divider />
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <ListItemText primary="Comentario 1" secondary="Autor" />
                <Typography variant="body2" color="gray">
                  {new Date().toLocaleString()}
                </Typography>
              </ListItem>
            </List>
            <Link to="/posts" style={{ textDecoration: "none" }}>
              <Button>Volver</Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};
