import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  setBoardCommentId: React.Dispatch<React.SetStateAction<string>>;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDelete: () => Promise<void>;
}
