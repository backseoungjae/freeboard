import { useQuery } from '@apollo/client';
import React from 'react';
import SidebarPresenter from './SidebarPresenter';
import { LOGGED_IN } from './SidebarQuery';

export default function SidebarContainer() {
  const { data } = useQuery(LOGGED_IN);

  return <SidebarPresenter data={data} />;
}
