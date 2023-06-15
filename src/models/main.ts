import { DocumentReference } from "firebase/firestore";
import { User } from "./auth";

export interface Post {
  id: string;
  title: string;
  content: string;
  createAt: Date;
  createBy: string;
  author: User | DocumentReference;
  // comments: Comment[] | null;
}

export interface Comment {
  id: string;
  content: string;
  createAt: Date;
  idPost: string;
  idUser: string;
}


