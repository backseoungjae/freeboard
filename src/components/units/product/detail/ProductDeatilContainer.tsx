import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  CREATE_POINT_BUY_AND_SELL,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  TOGGLE_USED_ITEM,
} from './ProductDetailQuery';
import { useRecoilState } from 'recoil';
import { newBasketsState } from '../../../commons/store';
import ProductDetailPresenter from './ProductDetailPresenter';

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductDeatilContainer() {
  // Recoil
  const [, setItems] = useRecoilState(newBasketsState);

  // 구매 관련 API
  const [payment] = useMutation(CREATE_POINT_BUY_AND_SELL);
  const router = useRouter();

  const id = router.query.productId;

  // 등록 상품 불러오는 API
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: id,
    },
  });

  // 장바구니
  const onClickBasket = (el: { _id: string }) => () => {
    const newBaskets = JSON.parse(localStorage.getItem('newBaskets') || '[]');

    const temp = newBaskets.filter(
      (basketEl: { _id: string }) => basketEl._id === el._id
    );
    if (temp.length > 0) {
      alert('이미 장바구니에 있습니다.');
      return;
    }
    const { ...newEl } = el;
    setItems(newBaskets.push(newEl));
    localStorage.setItem('newBaskets', JSON.stringify(newBaskets));
  };

  // 구매
  const onClickPayment = async () => {
    try {
      await payment({
        variables: {
          useritemId: id,
        },
      });
      alert('구매 성공');
      router.push(`/products`);
    } catch (error) {
      alert('구매 실패');
    }
  };

  // 삭제 APi
  const [deleteProduct] = useMutation(DELETE_USEDITEM);

  // 목록으로 이동
  const onClickListMove = () => {
    router.push('/products');
  };

  // 수정하기 이동
  const onClickEditMove = () => {
    router.push(`/products/${id}/edit`);
  };

  // 삭제 하기
  const onClickProductDelete = () => {
    deleteProduct({
      variables: {
        useditemId: id,
      },
    });
    router.push(`/products`);
  };

  // 찜하기
  const [togglePick] = useMutation(TOGGLE_USED_ITEM);

  const onClickPick = async () => {
    await togglePick({
      variables: {
        useditemId: id,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: {
            useditemId: id,
          },
        },
      ],
    });
  };

  // 카카오 맵
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=5146441fa20a4db96dbfcb5606df8b38&autoload=false&libraries=services,clusterer,drawing';

    document.head.appendChild(script);

    // 카카오 맵이 로드 된 후에 이동 되게 하는 코드
    script.onload = () => {
      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        const container = document.getElementById('newMap'); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress.lat,
            data?.fetchUseditem.useditemAddress.lng
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          data?.fetchUseditem.useditemAddress.lat,
          data?.fetchUseditem.useditemAddress.lng
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        const infowindow = new window.kakao.maps.InfoWindow({
          content: data?.fetchUseditem.useditemAddress.address,
        });
        infowindow.open(map, marker);

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, [
    data?.fetchUseditem.useditemAddress.lat,
    data?.fetchUseditem.useditemAddress.lng,
  ]);

  return (
    <ProductDetailPresenter
      data={data}
      onClickBasket={onClickBasket}
      onClickPayment={onClickPayment}
      onClickListMove={onClickListMove}
      onClickEditMove={onClickEditMove}
      onClickProductDelete={onClickProductDelete}
      onClickPick={onClickPick}
    />
  );
}
