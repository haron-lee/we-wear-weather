import { FC } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import useDailyComments from 'Components/common/useDailyComments';
import pcScreen from 'Atom/pcScreen';

const SpeechBubbleComment: FC = () => {
  const isPC = useRecoilValue(pcScreen);
  const { commentWeather, commentTemp, commentClothes, commentCaution } = useDailyComments();

  return (
    <SSpeechBubbleCommentLayout $isPC={isPC}>
      {commentWeather()} {commentTemp()}
      <br />
      {commentClothes()}
      <br />
      {commentCaution()}
    </SSpeechBubbleCommentLayout>
  );
};

export default SpeechBubbleComment;

const SSpeechBubbleCommentLayout = styled.section<{ $isPC: boolean }>`
  padding-top: 12px;
  font-size: ${(props) => (props.$isPC ? '16px' : '14px')};
  color: var(--gray-800);
  font-weight: 500;
  border-top: 1px solid var(--gray-200);
  line-height: 150%;
`;
