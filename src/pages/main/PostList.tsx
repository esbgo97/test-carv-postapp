import React, { Component } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add, Visibility, Edit, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { PostForm } from "./PostForm";
import { Post } from "../../models/main";
import { GET_POSTS, SAVE_POST, UPDATE_POST } from "../../services/PostsService";

export class PostList extends Component {
  state = {
    editPost: null,
    posts: [],
    openForm: false,
  };

  addPost = async (post: Post) => {
    var result = await SAVE_POST(post);
    if (result) {
      //Se guardo correctamente
      alert("Se guardó correctamente");
      setTimeout(() => {
        this.loadPosts();
      }, 2000);
    }
  };

  updatePost = async (post: Post) => {
    var result = await UPDATE_POST(post.id, post);
    if (result) {
      //Se guardo correctamente
      alert("Se guardó correctamente");
      setTimeout(() => {
        this.loadPosts();
      }, 2000);
    }
  };

  onSavePost = async (post: Post) => {
    if (post.id == null) {
      await this.addPost(post);
    } else {
      await this.updatePost(post);
    }
  };

  loadPosts = async () => {
    var posts = await GET_POSTS();
    this.setState({ ...this.state, posts });
  };

  onOpenForm = (post: Post | null) => {
    this.setState({ ...this.state, openForm: true, editPost: post });
  };

  onCloseForm = () => {
    this.setState({ ...this.state, openForm: false, editPost: null });
  };

  async componentDidMount(): Promise<void> {
    this.loadPosts();
  }
  render(): React.ReactNode {
    const { posts, editPost, openForm } = this.state;
    return (
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Card elevation={4}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Typography variant="h4" color="primary">
                    Listado de Posts
                  </Typography>
                  <Typography variant="body1">
                    Aqui puedes observar todos los post publicados por ti y por
                    los démas usuarios.
                  </Typography>
                </div>
                <Tooltip title="Crear un Nuevo Post">
                  <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() => this.onOpenForm(null)}
                  >
                    Crear Post
                  </Button>
                </Tooltip>
                {openForm && (
                  <PostForm
                    openForm={openForm}
                    editPost={editPost}
                    onOpenForm={this.onOpenForm}
                    onCloseForm={this.onCloseForm}
                    onSave={this.onSavePost}
                  />
                )}
              </Box>

              <br />
              <List sx={{ width: "100%" }}>
                {posts.map((post: any, index: number) => (
                  <PostItem
                    key={index}
                    post={post}
                    onEdit={() => this.onOpenForm(post)}
                  />
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    );
  }
}

//items[0].createAt.toDate().toLocaleString()
export const PostItem = (props: any) => {
  const { post, onEdit } = props;
  const { id, title, author, content } = post;

  return (
    <>
      <ListItem>
        <ListItemText
          primary={<strong>{title}</strong>}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {author.name}
              </Typography>
              {" - "}
              {content}
            </>
          }
        ></ListItemText>

        <Tooltip title="Ver Post">
          <Link to={"/post/" + id}>
            <IconButton onClick={() => {}} color="primary">
              <Visibility />
            </IconButton>
          </Link>
        </Tooltip>

        <Tooltip title="Editar Post">
          <IconButton onClick={() => onEdit(post)} color="warning">
            <Edit />
          </IconButton>
        </Tooltip>

        <Tooltip title="Eliminar Post">
          <IconButton onClick={() => {}} color="error">
            <Delete />
          </IconButton>
        </Tooltip>
      </ListItem>
    </>
  );
};
