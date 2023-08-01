import { ChangeEvent, FormEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { IModalFormValue } from "../../../../commons/libraries/Modal/Modal.types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  isOpen?: boolean;
  onClose: () => void;
  onClickDelete?: (e: MouseEvent<HTMLImageElement>) => void;
  onChangePassword?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteComment: (e: FormEvent<HTMLElement>) => Promise<void>;
}
