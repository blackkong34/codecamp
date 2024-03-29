import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.quires";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { IBoardsProps } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  ICreateBoardInput,
} from "../../../../commons/types/generated/types";
import BoardWriteUI from "./BoardWrite.presenter";
import { Modal } from "antd";
import { Address } from "react-daum-postcode";

export default function Boards(props: IBoardsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState({
    fullAddress: "",
    extraAddress: "",
    zonecode: "",
  });
  const router = useRouter();

  // 게시글 생성하기 - 통신
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  // 게시글 수정하기 - 통신
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  //취소버튼 눌렀을 때
  const onClickMoveToBack = (e: FormEvent<HTMLElement>): void => {
    Modal.confirm({
      title: "정말 나가시겠습니까?",
      content: "저장하지 않은 내용을 잃어버릴 수 있습니다.",
      okText: "나가기",
      cancelText: "계속 작성하기",
      onOk: () => router.push("/boards/"),
    });
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  //todo 주소변경시 상세 주소가 없으면 기존 주소가 유지됨
  const handlePost = (data: Address): void => {
    // 사용자가 선택한 타입에 따라 주소가 달라진다.
    let fullAddress =
      data.userSelectedType === "R" ? data.roadAddress : data.jibunAddress;

    //참고항목
    let extraAddress = "";

    if (data.addressType === "R" && /[동|로|가]$/g.test(data.bname)) {
      extraAddress += data.bname !== "" ? data.bname : "";

      if (data.buildingName) {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
    } else extraAddress = "";

    setAddress({
      ...address,
      fullAddress: fullAddress,
      extraAddress: extraAddress,
      zonecode: data.zonecode,
    });

    onToggleModal();
  };

  // 게시글 생성하기 - 이벤트
  const onSubmitCreate = async (formData: ICreateBoardInput): Promise<void> => {
    if (!formData) {
      Modal.warning({ title: "데이터 전송에 실패했습니다", okText: "확인" });
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: formData.writer,
            password: formData.password,
            title: formData.title,
            contents: formData.contents,
            youtubeUrl: formData.youtubeUrl,
            boardAddress: {
              zipcode: formData.boardAddress?.zipcode,
              address: formData.boardAddress?.address,
              addressDetail: formData.boardAddress?.addressDetail,
            },
          },
        },
      });

      router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.warning({ title: error.message, okText: "확인" });
    }
  };

  // 게시글 수정하기 -이벤트
  const onSubmitUpdate = async (formData: ICreateBoardInput): Promise<void> => {
    const updateVariables: Partial<ICreateBoardInput> = {};

    if (formData?.title) updateVariables.title = formData.title;
    if (formData?.contents) updateVariables.contents = formData.contents;
    if (formData?.youtubeUrl) updateVariables.youtubeUrl = formData.youtubeUrl;
    if (
      address.fullAddress !== "" ||
      address.zonecode !== "" ||
      address.extraAddress !== ""
    )
      updateVariables.boardAddress = {
        address: address.fullAddress,
        addressDetail: address.extraAddress,
        zipcode: address.zonecode,
      };

    const boardId =
      typeof router.query.boardId === "string" ? router.query.boardId : "";
    if (!boardId)
      Modal.error({ title: "시스템의 문제가 발생했습니다", okText: "확인" });
    try {
      await updateBoard({
        variables: {
          boardId,
          password: formData.password,
          updateBoardInput: updateVariables,
        },
      });
      Modal.info({
        title: "게시글이 수정되었습니다",
        okText: "확인",
      });
      router.push(`/boards/${boardId}/`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.warning({ title: error.message, okText: "확인" });
      }
    }
  };

  return (
    <div>
      <BoardWriteUI
        isEdit={props.isEdit}
        data={props.data}
        onSubmitCreate={onSubmitCreate}
        onSubmitUpdate={onSubmitUpdate}
        onClickMoveToBack={onClickMoveToBack}
        onToggleModal={onToggleModal}
        handlePost={handlePost}
        isOpen={isOpen}
        address={address}
      />
    </div>
  );
}
