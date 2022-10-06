import React from 'react';
import useAuth from '../../src/components/commons/hooks/useAuth';
import ProductListContainer from '../../src/components/units/product/list/ProductListContainer';

export default function index() {
  useAuth();
  return <ProductListContainer />;
}
