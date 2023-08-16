import { useState } from "react";
import { MouseEvent } from "react";
import PaginationUI from "./pagination.presenter";
import { IPaginationProps } from "./pagination.types";

export default function Pagination(props: IPaginationProps) {
  const { refetch, boardsCount } = props;
  const [startPage, setStartPage] = useState(1);
  const [isActivePage, setIsActivePage] = useState(1);

  const RANGE = 8;
  const endPage = Math.ceil((boardsCount?.fetchBoardsCount ?? 10) / 10);

  const handlePage = (e: MouseEvent<HTMLSpanElement>): void => {
    setIsActivePage(Number(e.currentTarget.id));
    void refetch({ page: Number(e.currentTarget.id) });
  };

  const handlePrevPages = (e: MouseEvent<HTMLSpanElement>): void => {
    if (startPage <= 1) return;
    const prevPages = startPage - RANGE;
    setIsActivePage(prevPages);
    setStartPage(prevPages);
    refetch({ page: prevPages });
  };

  const handleNextPages = (e: MouseEvent<HTMLSpanElement>): void => {
    if (startPage + RANGE > endPage) return;
    const nextPages = startPage + RANGE;
    setIsActivePage(nextPages);
    setStartPage(nextPages);
    void refetch({ page: nextPages });
  };

  const handleFirstPage = () => {
    setIsActivePage(1);
    setStartPage(1);
    void refetch({ page: 1 });
  };

  const handleEndPage = () => {
    setIsActivePage(endPage);
    setStartPage(
      endPage % RANGE ? endPage - (endPage % RANGE) + 1 : endPage - RANGE - 1,
    );
    void refetch({ page: endPage });
  };

  return (
    <PaginationUI
      RANGE={RANGE}
      startPage={startPage}
      isActivePage={isActivePage}
      endPage={endPage}
      handlePage={handlePage}
      handlePrevPages={handlePrevPages}
      handleNextPages={handleNextPages}
      handleFirstPage={handleFirstPage}
      handleEndPage={handleEndPage}
    />
  );
}
