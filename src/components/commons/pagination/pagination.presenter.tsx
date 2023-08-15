import type { MouseEvent } from "react";
import * as S from "./pagination.styles";
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";

interface IPaginationUIProps {
  RANGE: number;
  startPage: number;
  isActivePage: number;
  endPage: number;
  handlePage: (e: MouseEvent<HTMLSpanElement>) => void;
  handlePrevPages: (e: MouseEvent<HTMLSpanElement>) => void;
  handleNextPages: (e: MouseEvent<HTMLSpanElement>) => void;
  handleFirstPage: () => void;
  handleEndPage: () => void;
}

export default function PaginationUI(props: IPaginationUIProps) {
  const {
    RANGE,
    startPage,
    isActivePage,
    endPage,
    handlePage,
    handlePrevPages,
    handleNextPages,
    handleFirstPage,
    handleEndPage,
  } = props;
  return (
    <S.Pagination>
      <span onClick={handleFirstPage}>
        <DoubleLeftOutlined />
      </span>
      <span onClick={handlePrevPages}>
        <LeftOutlined />
      </span>
      {[...Array(RANGE)].map(
        (_, idx) =>
          startPage + idx <= endPage && (
            <S.PageNum
              id={String(startPage + idx)}
              onClick={handlePage}
              isActive={startPage + idx === isActivePage}
            >
              {startPage + idx}
            </S.PageNum>
          ),
      )}
      <span onClick={handleNextPages}>
        <RightOutlined />
      </span>
      <span onClick={handleEndPage}>
        <DoubleRightOutlined />
      </span>
    </S.Pagination>
  );
}
