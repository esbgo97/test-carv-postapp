import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { Post } from "../models/main";
import { fireStore } from "../packages/firebase";

var userId = "eznEUg10rkzDQfgwXETe";

export const SAVE_POST = async (post: Post) => {
  // Verificar si el usuario existe
  try {
    const userRef = doc(fireStore, "users", userId);
    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {
      console.log("El usuario no existe");
      return;
    }

    const postsRef = collection(fireStore, "posts");
    var result = await addDoc(postsRef, {
      title: post.title,
      author: userRef,
      content: post.content,
      createAt: serverTimestamp(),
    });
    console.log("El post se ha guardado correctamente");
    return result;
  } catch (error) {
    console.log("Error al guardar el post", error);
  }
};

export const UPDATE_POST = async (
  postId: string,
  updatedData: Post
): Promise<boolean> => {
  try {
    const postRef = doc(fireStore, "posts", postId);

    // Verificar si el post existe
    const postSnapshot = await getDoc(postRef);

    if (!postSnapshot.exists()) {
      console.log("El post no existe");
      return false;
    }

    // Verificar si se actualiza el campo "author"
    if (updatedData.author) {
      const userRef = doc(fireStore, "users", updatedData.author.id);
      const userSnapshot = await getDoc(userRef);

      if (!userSnapshot.exists()) {
        console.log("El usuario no existe");
        return false;
      }

      updatedData.author = userRef;
    }

    await updateDoc(postRef, updatedData as any);

    console.log("El post se ha actualizado correctamente");
    return true;
  } catch (error) {
    console.log("Error al actualizar el post", error);
    return false;
  }
};

export const GET_POSTS = async (): Promise<Post[]> => {
  const postsRef = collection(fireStore, "posts");
  const postsSnapshot = await getDocs(postsRef);

  const posts: Post[] = [];

  for (const postDoc of postsSnapshot.docs) {
    const postData = postDoc.data();
    const authorRef = doc(fireStore, "users", postData.author.id);
    const authorSnapshot = await getDoc(authorRef);
    const authorData = authorSnapshot.data();
    const post: Post = {
      id: postDoc.id,
      title: postData.title,
      content: postData.content,
      createBy: authorData?.name,
      createAt: postData.createAt,
      author: {
        id: authorSnapshot.id,
        name: authorData?.name,
        email: authorData?.email,
        createAt: authorData?.createAt,
      },
    };

    posts.push(post);
  }
  return posts;
};

export const GET_POST_BY_ID = async (postId: string): Promise<any | null> => {
  try {
    const postRef = doc(fireStore, "posts", postId);
    const postSnapshot = await getDoc(postRef);

    if (postSnapshot.exists()) {
      const postData = postSnapshot.data();

      // Obtener información del autor
      const authorRef = postData.author;
      const authorSnapshot = await getDoc(authorRef);

      //obtener informacion de comentarios
      

      if (authorSnapshot.exists()) {
        const authorData = authorSnapshot.data() as any;
        postData.author = {
          id: authorSnapshot.id,
          name: authorData.name,
        };
      } else {
        console.log("No se encontró la información del autor");
      }

      console.log("Información del post:", postData);
      return postData;
    } else {
      console.log("El post no existe");
    }
    return null;
  } catch (error) {
    console.log("Error al consultar el post", error);
    return null;
  }
};

export const ADD_COMMENT = async (postId: string, comment: string) => {
  try {
    const postRef = doc(fireStore, "posts", postId);
    const postSnapshot = await getDoc(postRef);

    if (postSnapshot.exists()) {
      // Obtener información del usuario que respondió
      const userRef = doc(fireStore, "users", userId);
      const userSnapshot = await getDoc(userRef);

      if (userSnapshot.exists()) {
        // const userData = userSnapshot.data();

        // Crear un nuevo documento en la colección "comments"
        const commentData = {
          postId: postId,
          userId: userId,
          content: comment,
          createdAt: serverTimestamp(),
        };

        const newCommentRef = await addDoc(
          collection(fireStore, "comments"),
          commentData
        );

        // Agregar el ID del comentario al campo "comments" del post
        await updateDoc(postRef, {
          comments: [...(postSnapshot.data().comments ?? []), newCommentRef.id],
        });

        console.log("El comentario se agregó correctamente");
        return true;
      } else {
        console.log("El usuario no existe");
      }
    } else {
      console.log("El post no existe");
    }
    return false;
  } catch (error) {
    console.log("Error al agregar el comentario", error);
    return false;
  }
};
