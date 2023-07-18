import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_AND_BOARDS_OF_BEST } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useState } from "react";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS_AND_BOARDS_OF_BEST);

  return (
    <>
      <BoardListUI data = {data}/>
    </>
  )
}