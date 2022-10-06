import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWriteQueries';
import BoardWritePresenter from './BoardWritePresenter';
import { IMyvariables, IWriteProps } from './BoardWriteTypes';

export default function BoardWriteContainer(props: IWriteProps) {
  // 객체로 합치는 useState
  const [address, setAddress] = useState({
    zipcode: '',
    address: '',
    addressDetail: '',
  });

  const [fileUrls, setFileUrls] = useState(['', '', '']);

  const [inputs, setInputs] = useState({
    writer: '',
    password: '',
    title: '',
    contents: '',
    youtubeUrl: '',
    boardAddress: {
      ...address,
    },
  });

  const [errorWriter, setErrorWriter] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [errorTitle, setErrorTitle] = useState<string>('');
  const [errorContents, setErrorContents] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const writerInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    writerInput.current?.focus();
  }, []);

  const router = useRouter();
  const [callBoard] = useMutation(CREATE_BOARD);
  const [callEidt] = useMutation(UPDATE_BOARD);

  const onChangeInputs = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });

    if (inputs.writer.length !== 0) {
      setErrorWriter('');
    }
    if (inputs.password.length !== 0) {
      setErrorPassword('');
    }
    if (inputs.title.length !== 0) {
      setErrorTitle('');
    }
    if (inputs.contents.length !== 0) {
      setErrorContents('');
    }

    if (inputs.writer && inputs.password && inputs.title && inputs.contents) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  // 모달 창 닫기 열기
  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const onCompleteAddressSearch = (data: {
    address: string;
    zonecode: string;
  }) => {
    setAddress({
      ...address,
      address: data.address,
      zipcode: data.zonecode,
    });
    setIsOpen((prev) => !prev);
  };

  const onChangeImage = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const graphqlSubmit = async () => {
    if (!inputs.writer) {
      setErrorWriter('이름을 작성해주세요.');
    }
    if (!inputs.password) {
      setErrorPassword('비밀번호를 작성해주세요.');
    }
    if (!inputs.title) {
      setErrorTitle('제목을 작성해주세요.');
    }
    if (!inputs.contents) {
      setErrorContents('내용을 작성해주세요.');
    }
    if (inputs.writer && inputs.password && inputs.title && inputs.contents) {
      try {
        const result = await callBoard({
          variables: {
            createBoardInput: {
              images: fileUrls,
              ...inputs,
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log(error);
        }
      }
    }
  };

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const myvariables: IMyvariables = {
      boardId: router.query.boardId,
      password: inputs.password,
      updateBoardInput: {},
    };

    if (inputs.title) {
      myvariables.updateBoardInput.title = inputs.title;
    }
    if (inputs.contents) {
      myvariables.updateBoardInput.contents = inputs.contents;
    }
    if (isChangedFiles) {
      myvariables.updateBoardInput.images = fileUrls;
    }

    try {
      await callEidt({
        variables: myvariables,
      });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <BoardWritePresenter
      active={active}
      isOpen={isOpen}
      // address={address}
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContents={errorContents}
      writerInput={writerInput}
      fileUrls={fileUrls}
      isEdit={props.isEdit}
      data={props.data}
      onChangeInputs={onChangeInputs}
      graphqlSubmit={graphqlSubmit}
      onClickUpdate={onClickUpdate}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeImage={onChangeImage}
    />
  );
}
