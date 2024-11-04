import styled from "@emotion/styled";

const MoimCard = ({ studyData }) => {
  const { name, leader, time, member } = studyData;
  return (
    <MoimCardWrapper>
      <MoimNameStyle>{name}</MoimNameStyle>
      <span>{`스터디장: ${leader}`}</span>
      <span>{`시간: ${time} | 인원: ${member}`}</span>
    </MoimCardWrapper>
  );
};

export default MoimCard;

const MoimCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 10rem;

  border: 2px solid black;
  border-radius: 10px;
`;

const MoimNameStyle = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;
