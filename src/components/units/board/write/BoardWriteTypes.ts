import { ChangeEvent, MouseEvent, RefObject } from 'react';

// container

export interface IWriteProps {
  isEdit: boolean;
  data?: {
    fetchBoard: {
      _id: string;
      title: string;
      writer: string;
      contents: string;
      createdAt: Date;
      youtubeUrl: string;
      likeCount: number;
      dislikeCount: number;
      images: string[];
      boardAddress: {
        zipcode: string;
        address: string;
        addressDetail: string;
      };
    };
  };
}

export interface IMyvariables {
  boardId: string | string[] | undefined;
  password: string;
  updateBoardInput?: any;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  images?: string[];
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

// presenter
export interface IWriteBoard {
  isEdit: boolean;
  data?: {
    fetchBoard: {
      _id: string;
      title: string;
      writer: string;
      contents: string;
      createdAt: Date;
      youtubeUrl: string;
      likeCount: number;
      dislikeCount: number;
      images: string[];
      boardAddress: {
        zipcode: string;
        address: string;
        addressDetail: string;
      };
    };
  };
  active: boolean;
  errorWriter: string;
  errorPassword: string;
  errorContents: string;
  errorTitle: string;
  isOpen: boolean;
  // address: any;
  addressDetail?: string;
  writerInput: RefObject<HTMLInputElement>;
  fileUrls: string[];
  onChangeInputs: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: {
    address: string;
    zonecode: string;
  }) => void;
  onClickUpdate: (e: MouseEvent<HTMLButtonElement>) => void;
  graphqlSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
  onChangeImage: (fileUrls: string, index: number) => void;
}

// styled

export interface IActive {
  active: boolean;
}
