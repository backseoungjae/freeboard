import React from 'react';
import { useTabs } from '../../commons/hooks/useTab';
import MyPickContainer from './pick/MyPickContainer';
import MypagePresenter from './MypagePresenter';
import MySellContainer from './sell/MySellContainer';

export default function MypageContainer() {
  const tabList = [
    {
      id: 1,
      tab: '판매 목록',
      content: <MySellContainer />,
    },
    {
      id: 2,
      tab: '찜 목록',
      content: <MyPickContainer />,
    },
  ];

  const { contentItem, contentChange } = useTabs(0, tabList);

  return (
    <MypagePresenter
      tabList={tabList}
      contentItem={contentItem}
      contentChange={contentChange}
    />
  );
}
