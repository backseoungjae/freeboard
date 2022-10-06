import { useMutation } from '@apollo/client';
import React, { ChangeEvent, useRef } from 'react';
import ImageUploadPresent from './ImageUploadPresent';
import { UPLOAD_FILE } from './ImageUploadQueries';
import { IUploadContainerProps } from './ImageUploadTypes';
import { checkValidationImage } from './ImageUploadValidation';

export default function ImageUploadContainer(props: IUploadContainerProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(e.target.files?.[0]);
    if (!file) {
      return;
    }

    try {
      const res = await uploadFile({
        variables: {
          file,
        },
      });
      props.onChangeImage(res.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <ImageUploadPresent
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeImages={onChangeUpload}
    />
  );
}
