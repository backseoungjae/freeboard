import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from './ProductCommentWriteQuery';
import * as S from './ProductCommentWriteStyles';

export default function ProductCommentWriteContainer() {
  const [contents, setContents] = useState<string>('');
  const [commentWrite] = useMutation(CREATE_USEDITEM_QUESTION);

  const router = useRouter();
  const id = router.query.productId;

  // 텍스트에어리어 작성
  const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  // 문의하기 버튼
  const onClickComment = async () => {
    try {
      await commentWrite({
        variables: {
          useditemId: id,
          createUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: {
              useditemId: id,
            },
          },
        ],
      });
      setContents('');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.CommentBox>
          <S.Imge src="/images/inquiry.png" alt="문의하기 이미지" />
          <S.CommentTitle>문의하기</S.CommentTitle>
        </S.CommentBox>
        <S.TextareaBox>
          <S.InputTextarea
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            maxLength={100}
            onChange={onChangeComment}
            name={contents}
            value={contents}
          />
          <S.CommentBottomBox>
            <S.Empty>
              <S.InputLength>{contents.length}/100</S.InputLength>
            </S.Empty>
            <S.Empty>
              <S.CommentSubmit onClick={onClickComment}>
                등록하기
              </S.CommentSubmit>
            </S.Empty>
          </S.CommentBottomBox>
        </S.TextareaBox>
      </S.Wrapper>
    </S.Container>
  );
}
