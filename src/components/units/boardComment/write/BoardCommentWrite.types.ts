import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IFormValue {
  writer: string;
  password: string;
  contents: string;
  rating: number;
}

export interface IBoardCommentWriteProps {
  comment?: IBoardComment;
  isEdit?: boolean;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IBoardCommentWriteUIProps {
  comment?: IBoardComment;
  isEdit?: boolean;
  onSubmitComment: (FormData: IFormValue) => Promise<void>;
  onUpdateComment: (FormData: IFormValue) => Promise<void>;
  onClickCancel: () => void;
}
