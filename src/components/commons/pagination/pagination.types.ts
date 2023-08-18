import { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface IPaginationProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  boardsCount: Pick<IQuery, "fetchBoardsCount"> | undefined;
}

export interface IPaginationUIProps {
  limit: number;
  startPage: number;
  isActivePage: number;
  endPage: number;
  handlePage: (e: MouseEvent<HTMLSpanElement>) => void;
  handlePrevPages: (e: MouseEvent<HTMLSpanElement>) => void;
  handleNextPages: (e: MouseEvent<HTMLSpanElement>) => void;
  handleFirstPage: () => void;
  handleEndPage: () => void;
}
