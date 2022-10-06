export interface IPaginationPresenter {
  renderPageNumbers: (false | JSX.Element)[] | undefined;
  onClickNext: () => void;
  onClickPrev: () => void;
}

// styled

export interface IActive {
  isActive?: boolean;
}
