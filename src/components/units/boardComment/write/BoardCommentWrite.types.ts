import {
  IQuery,
  ICreateBoardCommentInput,
} from "../../../../commons/types/generated/types";

export interface IFormValue {
  writer: string;
  password: string;
  contents: string;
  rating: number;
}

export interface IBoardCommentWriteUIProps {
  onSubmitComment: (FormData: IFormValue) => Promise<void>;
  // data: Pick<IQuery, "fetchBoardComments"> | undefined;
}

export interface IBoardCommentWriteProps {
  // data: Pick<IQuery, "fetchBoardComments"> | undefined;
}
