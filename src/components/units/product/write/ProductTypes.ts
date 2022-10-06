import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';

export interface IWriteProps {
  isEdit: boolean;
  data?: {
    fetchUseditem: {
      _id: string;
      name: string;
      remarks: string;
      contents: string;
      price: string;
      tags: string[];
      images: string[];
      pickedCount: number;
      createdAt: Date;
      useditemAddress: {
        zipcode: string;
        address: string;
        addressDetail: string;
        lat: number;
        lng: number;
      };
      seller: {
        _id: string;
        email: string;
        name: string;
      };
    };
  };
  loading?: string;
}

export interface IMyvariables {
  useditemId: string | string[] | undefined;
  updateUseditemInput: {
    name?: string;
    remarks?: string;
    contents?: string;
    images?: string[];
    price?: number;
    tags?: string[];
    useditemAddress?: {
      zipcode?: string;
      address?: string;
      addressDetail?: string;
      lat?: number;
      lng?: number;
    };
  };
}

export interface IProductPresent {
  data?: {
    fetchUseditem: {
      _id: string;
      name: string;
      remarks: string;
      contents: string;
      price: string;
      tags: string[];
      images: string[];
      pickedCount: number;
      createdAt: Date;
      useditemAddress: {
        zipcode: string;
        address: string;
        addressDetail: string;
        lat: number;
        lng: number;
      };
      seller: {
        _id: string;
        email: string;
        name: string;
      };
    };
  };
  isEdit: boolean;
  isOpen: boolean;
  onChangeContent: (value: string) => void;
  address: {
    address: string;
    addressDetail?: string;
    zipcode: string;
  };
  fileUrls: string[];
  tagList: string[];
  tags: string;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: {
    address: string;
    zonecode: string;
  }) => void;
  onChangeInputs: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTags: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChangeImage: (fileUrls: string, index: number) => void;
  onClickSubmit: () => void;
  onCancle: () => void;
  onClickUpdate: () => void;
  deleteTag: (e: MouseEvent<HTMLButtonElement>) => void;
}
