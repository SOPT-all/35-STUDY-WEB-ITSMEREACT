import MoimCard from "./MoimCard";
import { studyDatas } from "../constants/studyData";
import styled from "@emotion/styled";

const MoimList = () => {
  return (
    <>
      <h1>웹파트 스터디 리스트</h1>
      <MoimListWrapper>
        {studyDatas.map((studyData) => {
          return <MoimCard studyData={studyData} key={studyData.id} />;
        })}
      </MoimListWrapper>
    </>
  );
};

export default MoimList;

const MoimListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
