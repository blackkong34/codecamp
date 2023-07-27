import { ICreateBoardCommentInput } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteUIProps {
  onSubmitComment: (
    FormData: Required<ICreateBoardCommentInput>,
  ) => Promise<void>;
}
