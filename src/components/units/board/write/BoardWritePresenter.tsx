import * as S from './BoardWriteStyles';
import { IWriteBoard } from './BoardWriteTypes';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import DaumPostcode from 'react-daum-postcode';
import { v4 as uuidv4 } from 'uuid';
import ImageUploadContainer from '../../../commons/upload/ImageUploadContainer';

export default function BoardWritePresenter(props: IWriteBoard) {
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
          <S.Title>게시글 {props.isEdit ? '수정' : '등록'}</S.Title>
          <S.Box>
            <S.HalfInputBox>
              <S.Label>작성자</S.Label>
              <S.Input
                onChange={props.onChangeInputs}
                placeholder="이름을 적어주세요"
                type="text"
                defaultValue={props.data?.fetchBoard.writer}
                ref={props.writerInput}
                name="writer"
              />
              <S.ErrorEmptyBox>{props.errorWriter}</S.ErrorEmptyBox>
            </S.HalfInputBox>
            <S.HalfInputBox>
              <S.Label>비밀번호</S.Label>
              <S.Input
                onChange={props.onChangeInputs}
                placeholder="비밀번호를 입력해주세요"
                type="password"
                name="password"
              />
              <S.ErrorEmptyBox>{props.errorPassword}</S.ErrorEmptyBox>
            </S.HalfInputBox>
          </S.Box>
          <S.Box>
            <S.InputBox>
              <S.Label>제목</S.Label>
              <S.Input
                onChange={props.onChangeInputs}
                placeholder="제목을 입력해주세요."
                type="text"
                defaultValue={props.data?.fetchBoard.title}
                name="title"
              />
              <S.ErrorEmptyBox>{props.errorTitle}</S.ErrorEmptyBox>
            </S.InputBox>
          </S.Box>
          <S.Box>
            <S.InputBox>
              <S.Label>내용</S.Label>
              <S.Textarea
                onChange={props.onChangeInputs}
                placeholder="내용을 입력해주세요."
                defaultValue={props.data?.fetchBoard.contents}
                name="contents"
              />
              <S.ErrorEmptyBox>{props.errorContents}</S.ErrorEmptyBox>
            </S.InputBox>
          </S.Box>
          {/* 일단 필요 없는 부분 */}
          {/* <S.AddressBox>
            <S.Label>주소</S.Label>
            <S.AddressInner>
              <S.AddressInput
                type="text"
                placeholder="07250"
                readOnly
                value={
                  props.address.zipcode ||
                  props.data?.fetchBoard.boardAddress?.zipcode
                }
              />
              <S.AddressButton onClick={props.onClickAddressSearch}>
                우편번호 검색
              </S.AddressButton>
            </S.AddressInner>
            <S.InputBox>
              <S.Input
                type="text"
                readOnly
                value={
                  props.address.address ||
                  props.data?.fetchBoard.boardAddress?.address
                }
              />
            </S.InputBox>
            <S.InputBox>
              <S.Input
                type="text"
                name="addressDetail"
                onChange={props.onChangeAddressDetail}
                defaultValue={
                  props.data?.fetchBoard.boardAddress?.addressDetail
                }
              />
            </S.InputBox>
          </S.AddressBox> */}
          <S.Box>
            <S.InputBox>
              <S.Label>유튜브</S.Label>
              <S.Input
                onChange={props.onChangeInputs}
                defaultValue={props.data?.fetchBoard.youtubeUrl}
                placeholder="링크를 복사해주세요."
                type="text"
                name="youtubeUrl"
              />
            </S.InputBox>
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
          <S.EmptyBox>
            <S.Label>메인 설정</S.Label>
          </S.EmptyBox>
          <S.LdioInputInner>
            <S.LdioInputBox>
              <S.LdioInput type="radio" id="yotube" name="sns" />
              <S.Label htmlFor="yotube">유튜부</S.Label>
            </S.LdioInputBox>
            <S.LdioInputBox>
              <S.LdioInput type="radio" id="picture" name="sns" />
              <S.Label htmlFor="picture">사진</S.Label>
            </S.LdioInputBox>
          </S.LdioInputInner>
          <S.ButtonBox>
            <S.Button
              onClick={props.isEdit ? props.onClickUpdate : props.graphqlSubmit}
              active={props.isEdit ? true : props.active}
            >
              {props.isEdit ? '수정' : '등록'}하기
            </S.Button>
          </S.ButtonBox>
        </S.Inner>
      </S.Wrapper>
    </S.Container>
  );
}
