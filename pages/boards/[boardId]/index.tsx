import BoardCommentListContainer from '../../../src/components/units/board/comment/list/BoardCommentListContainer';
import BoardCommentWriteContainer from '../../../src/components/units/board/comment/write/BoardCommentWriteContainer';
import BoardDetailContainer from '../../../src/components/units/board/detail/BoardDetailContainer';

export default function index() {
  // 게시글 페이지 및 코멘트 list, 작성 페이지
  return (
    <div>
      <BoardDetailContainer />
      <BoardCommentWriteContainer />
      <BoardCommentListContainer />
    </div>
  );
}
