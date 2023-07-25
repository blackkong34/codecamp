import { IQuery } from "../../../../commons/types/generated/types";
import { FormEvent } from "react";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickDeleteBoard: (e: FormEvent<HTMLElement>) => void;
  onclickMoveToEdit: () => void;
  onClickMoveToList: () => void;
}
