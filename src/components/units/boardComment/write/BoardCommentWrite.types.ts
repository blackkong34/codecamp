import { ICreateBoardCommentInput } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteUIProps {
  onSubmitComment: (FormData: IFormValue) => Promise<void>;
}

export interface IFormValue {
  writer: string;
  password: string;
  contents: string;
  rating: number;
}
