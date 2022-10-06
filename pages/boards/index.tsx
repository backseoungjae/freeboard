import React from 'react';
import useAuth from '../../src/components/commons/hooks/useAuth';
import BoardListContainer from '../../src/components/units/board/list/BoardListContainer';

export default function index() {
  useAuth();
  return <BoardListContainer />;
}
