import { FormEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDeleteComment: (e: FormEvent<HTMLElement>) => void;
}
