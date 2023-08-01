import {
  IQuery,
  ICreateBoardInput,
} from "../../../../commons/types/generated/types";
import { FormEvent, MouseEvent } from "react";

export interface IBoardsProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export type FormValues = {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
};

export interface IBoardWriteUIProps extends IBoardsProps {
  onSubmitCreate?: (formData: ICreateBoardInput) => void;
  onSubmitUpdate?: (formData: ICreateBoardInput) => void;
  onClickMoveToBack?: (e: FormEvent<HTMLElement>) => void;
}
