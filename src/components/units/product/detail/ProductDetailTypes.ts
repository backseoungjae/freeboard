export interface IProductDetailPresenter {
  data?: {
    fetchUseditem: {
      _id: string;
      name: string;
      remarks: string;
      contents: string;
      price: number;
      tags: string[];
      images: string[];
      pickedCount: number;
      createdAt: Date;
      useditemAddress: {
        zipcode: string;
        address: string;
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
  onClickBasket: (el: any) => () => void;
  onClickPayment: () => void;
  onClickPick: () => void;
  onClickListMove: () => void;
  onClickEditMove: () => void;
  onClickProductDelete: () => void;
}
