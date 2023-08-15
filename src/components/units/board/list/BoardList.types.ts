import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface IBoardListUIProps {
  boardsData?: Pick<IQuery, "fetchBoards">;
  bestBoardsData?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onClickMoveToDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToNew: () => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  boardsCount: Pick<IQuery, "fetchBoardsCount"> | undefined;
}
