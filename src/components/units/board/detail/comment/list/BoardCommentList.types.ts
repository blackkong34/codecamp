import { FormEvent } from "react";

export interface IBoardCommentListUI {
  data?: any;
  onClickDeleteComment: (e: FormEvent<HTMLElement>) => void;
}

export interface IDeleteCommentValues {
  password: string;
  boardCommentId: string;
}
