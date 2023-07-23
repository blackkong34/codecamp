import { FormEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoardsOfTheBest" | "fetchBoards">;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (e: FormEvent<HTMLElement>) => void;
}
