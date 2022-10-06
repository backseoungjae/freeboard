// mypagePresenter
export interface IMypagePresenter {
  tabList: { id: number; tab: string; content: JSX.Element }[];
  contentChange: (i: number) => void;
  contentItem: { id: number; tab: string; content: JSX.Element };
}

// style
export interface IActive {
  isActive?: boolean;
}
