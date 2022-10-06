import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { v4 as uuidv4 } from 'uuid';
import * as S from './ProductStyle';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { IProductPresent } from './ProductTypes';
import ImageUploadContainer from '../../../commons/upload/ImageUploadContainer';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function ProductPresent(props: IProductPresent) {
  return (
    <S.Container>
      <S.Wrapper>
        {props.isOpen && (
          <Modal
            visible={true}
            onOk={props.onClickAddressSearch}
            onCancel={props.onClickAddressSearch}
          >
            <DaumPostcode onComplete={props.onCompleteAddressSearch} />
          </Modal>
        )}
        <S.Inner>
          <S.Title>상품 {props.isEdit ? '수정' : '등록'}</S.Title>
          <S.Box>
            <S.InputBox>
              <S.Label>상품명</S.Label>
              <S.Input
                onChange={props.onChangeInputs}
                defaultValue={props.data?.fetchUseditem.name}
                placeholder="상품명을 작성해주세요"
                type="text"
                name="name"
              />
            </S.InputBox>
          </S.Box>
          <S.Box>
            <S.InputBox>
              <S.Label>상품 요약</S.Label>
              <S.Input
                onChange={props.onChangeInputs}
                placeholder="상품요약을 작성해주세요."
                defaultValue={props.data?.fetchUseditem.remarks}
                type="text"
                name="remarks"
              />
            </S.InputBox>
          </S.Box>
          <S.Box>
            <S.InputBox>
              <S.Label>상품 내용</S.Label>
              <ReactQuill
                onChange={props.onChangeContent}
                defaultValue={props.data?.fetchUseditem.contents}
                placeholder="상품을 설명해주세요."
                style={{
                  height: '320px',
                  width: '100%',
                }}
              />
            </S.InputBox>
          </S.Box>
          <S.Box>
            <S.InputBox>
              <S.Label>판매 가격</S.Label>
              <S.Input
                defaultValue={props.data?.fetchUseditem.price}
                onChange={props.onChangePrice}
                placeholder="판매 가격을 입력해주세요"
                type="number"
                name="price"
              />
            </S.InputBox>
          </S.Box>
          <S.Box>
            <S.InputBox>
              <S.Label>태그 입력</S.Label>
              <S.Input
                tabIndex={2}
                value={props.tags}
                onChange={props.onChangeTags}
                onKeyPress={props.onKeyPress}
                placeholder="#태그 #태그 #태그 #빼고 입력 후 Enter키를 눌러주세요"
                type="text"
              />
            </S.InputBox>
          </S.Box>
          <S.TagsInner>
            {props.tagList?.map((el, i) => {
              return (
                <S.TagsBox key={i}>
                  <S.frontTag>#</S.frontTag>
                  <S.Tags>{`${el}`}</S.Tags>
                  <S.TagsButton onClick={props.deleteTag}>X</S.TagsButton>
                </S.TagsBox>
              );
            })}
          </S.TagsInner>
          <S.Box>
            <S.HalfInputBox>
              <S.Label>거래 위치</S.Label>
              <S.KakaoMap id="map" />
            </S.HalfInputBox>
            <S.HalfInputBox>
              <S.AddressBox>
                <S.AddressInner>
                  <S.AddressNumberInput
                    type="text"
                    placeholder="07250"
                    readOnly
                    value={props.address.zipcode}
                  />
                  <S.AddressButton onClick={props.onClickAddressSearch}>
                    우편번호 검색
                  </S.AddressButton>
                </S.AddressInner>
              </S.AddressBox>
              <S.AddressBox>
                <S.AddressInput
                  readOnly
                  type="text"
                  value={props.address.address}
                />
                <S.AddressInput
                  type="text"
                  name="addressDetail"
                  onChange={props.onChangeAddressDetail}
                  value={props.address.addressDetail}
                />
              </S.AddressBox>
            </S.HalfInputBox>
          </S.Box>
          <S.EmptyBox>
            <S.Label>사진첨부</S.Label>
            <S.PictureBox>
              {props.fileUrls.map((el, index) => (
                <ImageUploadContainer
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeImage={props.onChangeImage}
                />
              ))}
            </S.PictureBox>
          </S.EmptyBox>
          <S.ButtonBox>
            <S.Button button="cancel" onClick={props.onCancle}>
              취소하기
            </S.Button>
            <S.Button
              button="write"
              onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            >
              {props.isEdit ? '수정하기' : '등록하기'}
            </S.Button>
          </S.ButtonBox>
        </S.Inner>
      </S.Wrapper>
    </S.Container>
  );
}
