import { ChangeEvent, RefObject } from 'react';

export interface IUploadContainerProps {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeImage: (fileUrl: string, i: number) => void;
}

export interface IUploadPresentProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeImages: (e: ChangeEvent<HTMLInputElement>) => void;
}
