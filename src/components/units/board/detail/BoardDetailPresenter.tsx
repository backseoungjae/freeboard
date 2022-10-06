import * as S from './BoardDetailStyles';
import { newDate } from '../../../../commons/Date';
import { IBoardDetail } from './BoardDetailTypes';

export default function BoardDetailPresenter(props: IBoardDetail) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Inner>
          <S.DetailTilteInner>
            <S.DetailProfileInner>
              <S.DetailProfileBox>
                <S.ImageBox src="/images/profile.png" alt="profile" />
              </S.DetailProfileBox>
              <S.DetailTitleBox>
                <S.DetailTitle>{props.data?.fetchBoard.writer}</S.DetailTitle>
                <S.DetailDate>
                  Date:{newDate(props.data?.fetchBoard.createdAt as Date)}
                </S.DetailDate>
              </S.DetailTitleBox>
            </S.DetailProfileInner>
          </S.DetailTilteInner>
          <S.DetailContentInner>
            <S.DetailContentTitle>
              {props.data?.fetchBoard.title}
            </S.DetailContentTitle>
            <S.DetailContentFile>
              {props.data?.fetchBoard.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.DetailContentFile>
            <S.DetailContent>
              <S.DetailContentText>
                {props.data?.fetchBoard.contents}
              </S.DetailContentText>
            </S.DetailContent>
            <S.DetailContentYoutubeBox>
              {props.data?.fetchBoard.youtubeUrl && (
                <S.YoutubeBox
                  url={props.data?.fetchBoard.youtubeUrl}
                  width="100%"
                  height="260px"
                  autoPlay
                  playing
                  controls
                />
              )}
            </S.DetailContentYoutubeBox>
            <S.DetailContentLikeInner>
              <S.DetailContentLikeBox>
                <S.LikeBox onClick={props.onClickLike}>
                  <S.LikeIcon />
                </S.LikeBox>
                <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
              </S.DetailContentLikeBox>
              <S.DetailContentDisLikeBox>
                <S.DisLikeBox onClick={props.onClickDislike}>
                  <S.DislikeIcon />
                </S.DisLikeBox>
                <S.DislikeCount>
                  {props.data?.fetchBoard.dislikeCount}
                </S.DislikeCount>
              </S.DetailContentDisLikeBox>
            </S.DetailContentLikeInner>
          </S.DetailContentInner>
          <S.DelButtonBox>
            <S.DelButton id={props.id as string} onClick={props.onClickDelete}>
              삭제하기
            </S.DelButton>
          </S.DelButtonBox>
        </S.Inner>
        <S.ButtonBox>
          <S.Button onClick={props.onClickListMove}>목록보기</S.Button>
          <S.Button onClick={props.onClickEditMove}>수정하기</S.Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
