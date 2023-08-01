import { FormEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { IModalFormValue } from "../../../../commons/libraries/Modal/Modal.types";
import { bool } from "yup";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDeleteComment: (e: FormEvent<HTMLElement>) => void;
  isOpen: boolean;
  modalContents: { text: string; type?: string };
  getValue: (data: IModalFormValue) => void;
  onToggleModal: () => void;
  setIsOpen: boolean;
}
