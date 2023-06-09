import { Component } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  TextField,
  Typography,
} from "@mui/material";

export class PostForm extends Component<any, any> {
  state = {
    id: null,
    title: "",
    content: "",
    charCount: 0,
  };

  handleSave = () => {
    this.props.onSave(this.state);
  };

  handleClose = () => {
    this.props.onCloseForm();
  };

  onChangeValues = (e: any) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
    if (name === "content") {
      this.setState({ charCount: value.length });
    }
  };

  componentDidMount(): void {
    const { editPost } = this.props;
    
    if (editPost != null) {
      this.setState({
        ...this.state,
        id: editPost.id,
        title: editPost.title,
        content: editPost.content,
      });
    }
  }

  render() {
    const { openForm, editPost, onCloseForm } = this.props;
    const { id, title, content, charCount } = this.state;
    return (
      <Dialog open={openForm} onClose={onCloseForm}>
        <DialogTitle color="primary">
          {id === undefined ? "Crear Post" : `Acutalizar Post`}
        </DialogTitle>
        <DialogContent>
          {editPost?.id && (
            <Typography variant="subtitle2" style={{ textAlign: "right" }}>
              ({editPost?.id})
            </Typography>
          )}

          <DialogContentText>
            Escribe un título llamativo, y dejate llevar por tu imaginación con
            el contenido.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            value={title}
            label="Título"
            type="text"
            fullWidth
            onChange={(e) => this.onChangeValues(e)}
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="content"
            name="content"
            value={content}
            label="Contenido"
            rows={5}
            inputProps={{ maxLength: 500 }}
            onChange={(e) => this.onChangeValues(e)}
            type="text"
            fullWidth
            multiline
            variant="standard"
            helperText={charCount + "/ 500"}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Cancelar</Button>
          <Button variant="contained" onClick={this.handleSave}>
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
