import { DocumentReference } from "firebase/firestore";
import { User } from "./auth";

export interface Post {
  id: string;
  title: string;
  content: string;
  createAt: Date;
  createBy: string;
  author: User | DocumentReference;
}
