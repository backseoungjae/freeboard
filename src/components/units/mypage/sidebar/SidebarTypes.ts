export interface ISidebarPresenter {
  data: {
    fetchUserLoggedIn: {
      _id: string;
      email: string;
      name: string;
      picture: string;
      userPoint: {
        amount: number;
      };
    };
  };
}
