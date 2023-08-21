import { IPaginationUIProps } from "./pagination.types";
import * as S from "./pagination.styles";
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";

export default function PaginationUI(props: IPaginationUIProps) {
  const {
    limit,
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
        <DoubleLeftOutlined rev="icon" />
      </span>
      <span onClick={handlePrevPages}>
        <LeftOutlined rev="icon" />
      </span>
      {[...Array(limit)].map(
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
        <RightOutlined rev="icon" />
      </span>
      <span onClick={handleEndPage}>
        <DoubleRightOutlined rev="icon" />
      </span>
    </S.Pagination>
  );
}
