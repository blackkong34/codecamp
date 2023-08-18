import { Address } from "react-daum-postcode";
import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickDeleteBoard: (e: MouseEvent<HTMLButtonElement>) => void;
  onclickMoveToEdit: () => void;
  onClickMoveToList: () => void;
  onClickLike: () => Promise<void>;
  onClickDislike: () => Promise<void>;
}
