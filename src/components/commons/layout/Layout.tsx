import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import BannerContainer from './banner/BannerContainer';
import Header from './header/Header';
import Navigtion from './Navigtion/Navigtion';
import Recent from './recent/Recent';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const id = router.query.boardId;

  const HIDDEN = ['/', '/login', '/signup'];

  const HIDDEN_RECENT = [
    '/boards',
    '/boards/new',
    `/boards/${id}`,
    `/boards/${id}/edit`,
    '/mypage',
  ];
  const isHidden = HIDDEN.includes(router.asPath);
  const isHiddenRecent = HIDDEN_RECENT.includes(router.asPath);

  return (
    <div>
      <Header />
      {!isHidden && <BannerContainer />}
      {!isHidden && <Navigtion />}
      {!isHidden && <Recent /> && !isHiddenRecent && <Recent />}
      <div>{props.children}</div>
    </div>
  );
}
