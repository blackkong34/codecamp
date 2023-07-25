import { IQuery } from "../../../../commons/types/generated/types";
import { FormEvent } from "react";
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
  onSubmitCreate?: (formData: Required<FormValues>) => void;
  onSubmitUpdate?: (formData: FormValues) => void;
  onClickMoveToBack?: (e: FormEvent<HTMLElement>) => void;
}
