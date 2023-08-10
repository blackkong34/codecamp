import { FormEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoardsOfTheBest" | "fetchBoards">;
  onClickMoveToDetail: (e: FormEvent<HTMLElement>) => void;
}
