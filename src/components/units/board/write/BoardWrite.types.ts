import {
  IQuery,
  IMutationUpdateBoardArgs,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardsProps {
  data?: Pick<IQuery, "fetchBoard">;
  isEdit: boolean;
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
  onClickMoveToBack?: () => void;
}
