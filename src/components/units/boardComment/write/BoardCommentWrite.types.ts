import { ICreateBoardCommentInput } from "../../../../commons/types/generated/types";

// export type CreateCommnetValues = {
//   writer: string;
//   password: string;
//   contents: string;
//   rating?: number;
// };

export interface BoardCommentWriteUIProps {
  onSubmitComment: (FormData: ICreateBoardCommentInput) => Promise<void>;
}
