import {
  IQuery,
  ICreateBoardCommentInput,
  IBoardComment,
} from "../../../../commons/types/generated/types";

export interface IFormValue {
  writer: string;
  password: string;
  contents: string;
  rating: number;
}

export interface IBoardCommentWriteUIProps {
  onSubmitComment: (FormData: IFormValue) => Promise<void>;
  onUpdateComment: (FormData: IFormValue) => Promise<void>;
  onClickCancel: () => void;
  comment: IBoardComment;
  isEdit: boolean;
}
export interface IBoardCommentWriteProps {
  comment: IBoardComment;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  // data: Pick<IQuery, "fetchBoardComments"> | undefined;
}
