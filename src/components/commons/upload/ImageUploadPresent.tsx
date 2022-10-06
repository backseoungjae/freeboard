import React from 'react';
import * as S from './ImageUploadStyles';
import { IUploadPresentProps } from './ImageUploadTypes';

export default function ImageUploadPresent(props: IUploadPresentProps) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>
          <>+</>
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeImages}
      />
    </>
  );
}
