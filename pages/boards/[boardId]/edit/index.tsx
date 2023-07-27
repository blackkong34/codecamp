import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

export default function Boards(): JSX.Element {
  const router = useRouter();
  // if (!router || typeof router.query.boardId !== "string") return <></>;
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    router && FETCH_BOARD,
    {
      variables: { boardId: "" + router.query.boardId },
    },
  );

  return <BoardWrite isEdit={true} data={data} />;
}
