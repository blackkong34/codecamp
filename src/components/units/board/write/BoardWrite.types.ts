import {
  IQuery,
  ICreateBoardInput,
} from "../../../../commons/types/generated/types";
import { FormEvent, MouseEvent } from "react";
import { Address } from "react-daum-postcode";
export interface IBoardsProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export type FormValues = {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: IAddress;
};

interface IAddress {
  fullAddress: string;
  extraAddress?: string;
  zonecode: string;
}

export interface IBoardWriteUIProps extends IBoardsProps {
  onSubmitCreate?: (formData: ICreateBoardInput) => void;
  onSubmitUpdate?: (formData: ICreateBoardInput) => void;
  onClickMoveToBack?: (e: FormEvent<HTMLElement>) => void;
  onToggleModal?: () => void;
  handlePost?: (data: Address) => void;
  isOpen: boolean;
  address?: IAddress;
}
