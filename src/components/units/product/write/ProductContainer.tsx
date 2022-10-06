import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import ProductPresent from './ProductPresenter';
import { CREATE_USED_ITEM, UPDATE_USEDITEM } from './ProductQuery';
import { IMyvariables, IWriteProps } from './ProductTypes';

declare const window: typeof globalThis & {
  kakao: any;
};

type Address = {
  address: string;
  zipcode: string;
  addressDetail: string;
};

type Inputs = {
  name: string;
  remarks: string;
};

export default function ProductContainer(props: IWriteProps) {
  const router = useRouter();
  const [createItem] = useMutation(CREATE_USED_ITEM);
  const [callEidt] = useMutation(UPDATE_USEDITEM);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contents, setContents] = useState<string>('');

  const [price, setPrice] = useState<string>('');

  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

  const [address, setAddress] = useState<Address>({
    address: '',
    zipcode: '',
    addressDetail: '',
  });

  const [inputs, setInputs] = useState<Inputs>({
    name: '',
    remarks: '',
  });

  const [tags, setTags] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>([]);

  // 카카오 맵
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=f0047173bac4ebb0664e5488f45f4165&autoload=false&libraries=services,clusterer,drawing';

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById('map');
        const options = {
          center: props.data
            ? new window.kakao.maps.LatLng(
                props.data?.fetchUseditem.useditemAddress.lat,
                props.data?.fetchUseditem.useditemAddress.lng
              )
            : new window.kakao.maps.LatLng(37.4849, 126.8966),
          level: 3,
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(container, options);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          address.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: address.address,
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);

              // 좌표 값 받아오는 state
              setLat(coords.Ma);
              setLng(coords.La);
            }
          }
        );
      });
    };
  }, [address]);

  const onChangeTags = (e: ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      (e.target as HTMLInputElement).value.length !== 0 &&
      e.key === 'Enter'
    ) {
      onSubmitTags();
    }
  };

  const onSubmitTags = () => {
    const updatedTagList = [...tagList];
    updatedTagList.push(tags);
    setTagList(updatedTagList);
    setTags('');
  };

  const deleteTag = (e: MouseEvent<HTMLButtonElement>) => {
    const deleteTag = (e.target as any).parentElement?.childNodes[1].innerText;

    const filteredTagList = tagList.filter(
      (tagItem: string) => tagItem !== deleteTag
    );
    setTagList(filteredTagList);
  };

  const [fileUrls, setFileUrls] = useState<string[]>(['', '', '']);

  const onChangeContent = (value: string) => {
    setContents(value === '<p><br></p>' ? '' : value);
  };

  const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // value의 값이 숫자가 아닐경우 빈문자열로 replace 해버림.
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setPrice(onlyNumber);
  };

  const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeImage = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // 모달 창 닫기 열기
  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const onCompleteAddressSearch = (data: {
    address: string;
    zonecode: string;
  }) => {
    setAddress({
      ...address,
      address: data.address,
      zipcode: data.zonecode,
    });
    setIsOpen((prev) => !prev);
  };

  const onClickSubmit = async () => {
    try {
      const res = await createItem({
        variables: {
          createUseditemInput: {
            contents,
            price: Number(price),
            images: fileUrls,
            tags: tagList,
            ...inputs,
            useditemAddress: {
              ...address,
              lat,
              lng,
            },
          },
        },
      });
      router.push(`/products/${res.data.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const myvariables: IMyvariables = {
      useditemId: router.query.productId,
      updateUseditemInput: {
        useditemAddress: {
          ...address,
          lat,
          lng,
        },
      },
    };

    if (isChangedFiles) {
      myvariables.updateUseditemInput.images = fileUrls;
    }
    if (contents) {
      myvariables.updateUseditemInput.contents = contents;
    }
    if (price) {
      myvariables.updateUseditemInput.price = Number(price);
    }
    if (tagList) {
      myvariables.updateUseditemInput.tags = tagList;
    }
    if (inputs.remarks) {
      myvariables.updateUseditemInput.remarks = inputs.remarks;
    }
    if (inputs.name) {
      myvariables.updateUseditemInput.name = inputs.name;
    }

    try {
      await callEidt({
        variables: myvariables,
      });
      router.push(`/products/${router.query.productId}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  // 수정 페이지 주소 불러오는 코드
  useEffect(() => {
    setAddress({
      address:
        props.data?.fetchUseditem.useditemAddress.address || '본사입니다.',
      zipcode: props.data?.fetchUseditem.useditemAddress.zipcode || '',
      addressDetail:
        props.data?.fetchUseditem.useditemAddress.addressDetail || '',
    });
  }, [props.data?.fetchUseditem.useditemAddress]);

  useEffect(() => {
    setLat(props.data?.fetchUseditem.useditemAddress.lat || 37.4849);
  }, [props.data?.fetchUseditem.useditemAddress.lat]);

  useEffect(() => {
    setLng(props.data?.fetchUseditem.useditemAddress.lng || 126.8966);
  }, [props.data?.fetchUseditem.useditemAddress.lng]);

  // 수정 페이지 이미지 불러오는 코드

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  const onCancle = () => {
    router.push('/products');
  };

  // 수정 페이지 태그 불러오는 코드

  useEffect(() => {
    setTagList(props.data?.fetchUseditem.tags || []);
  }, [props.data?.fetchUseditem.tags]);

  return (
    <ProductPresent
      isEdit={props.isEdit}
      isOpen={isOpen}
      address={address}
      fileUrls={fileUrls}
      tags={tags}
      tagList={tagList}
      data={props.data}
      onChangeTags={onChangeTags}
      onClickUpdate={onClickUpdate}
      onChangeContent={onChangeContent}
      onChangePrice={onChangePrice}
      onChangeInputs={onChangeInputs}
      onChangeImage={onChangeImage}
      onClickAddressSearch={onClickAddressSearch}
      onChangeAddressDetail={onChangeAddressDetail}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickSubmit={onClickSubmit}
      onCancle={onCancle}
      onKeyPress={onKeyPress}
      deleteTag={deleteTag}
    />
  );
}
