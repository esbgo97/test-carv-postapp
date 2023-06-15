import { useEffect, useState } from "react";
import { connect } from "react-redux";
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

import { ADD_COMMENT } from "../../services/PostsService";
import { loadPost } from "../../store/actions/postsActions";

const Post = (props: any) => {
  const { id } = useParams();

  const [comment, setComment] = useState("");

  useEffect(() => {
    props.onLoadPost(id);
  }, []);

  const onAddComment = async () => {
    console.log(comment);
    var result = await ADD_COMMENT(id ?? "", comment);
    if (result) {
      alert("se agrego el comentario correctamente!");
    }
  };

  const { post } = props;

  return (
    <Grid container>
      <Grid item xs={2} />

      <Grid item xs={8}>
        <Card elevation={4}>
          {post == null ? (
            <Typography variant="body1"> Sin Datos!</Typography>
          ) : (
            <CardContent>
              <Typography variant="h5" color="primary">
                {post.title}
              </Typography>

              <Typography variant="body1">{post.content}</Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" color="gray">
                  {post.autor}
                </Typography>
                <Typography variant="subtitle2" color="gray">
                  {post.createAt.toDate().toLocaleString()}
                </Typography>
              </Box>
              <br />
              <Divider />

              <Typography variant="h6" color="primary">
                Comentarios
              </Typography>

              <List>
                <ListItem>
                  <TextField
                    label="Nuevo Comentario"
                    variant="standard"
                    fullWidth
                    value={post.comment}
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
          )}
        </Card>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoadPost: (postId: string) => dispatch(loadPost(postId)),
    onAddComment:(postId:string, comment:string) => dispatch()
  };
};

const mapStateToProps = (state: any) => {
  return {
    post: state.posts.post,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
