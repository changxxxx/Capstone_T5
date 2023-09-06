import React from 'react';
import styled from 'styled-components';
import {DropdownHeader} from '@/components/dropdown_header';

//灰
const ApplyContainer = styled.div`
  width: 1008px;
  min-height: 2702px;
  position: absolute;
  top: 136px;
  left: 216px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #DDDDDD;
`;

//粉
const Framework = styled.div`
  width: 1008px;
  min-height: 2630px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FF88C2;
`;

//黄
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 8px;
  gap: 40px;
  background: #FFDD55;
`;

//绿
const RoleDetails = styled(StyledDiv)`
  width: 1008px;
  height: 523px;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  box-shadow: 0px 1px 2px 0px #1018280F;
  box-shadow: 0px 1px 3px 0px #1018281A;

`;

const Framework7132 = styled.div`
    width: Fill (1,008px)
    height: Hug (67px)
    padding: 16px 32px 0px 32px
    gap: 16px
    display: Flex
    background: #66FF66
`;

//蓝
const ConfirmDetails = styled(StyledDiv)`
  width: 1008px;
  min-height: 827px;
  padding: 16px 40px;
  background: #66FFFF;
`;

//紫
const Question1 = styled(StyledDiv)`
  width: 1008px;
  min-height: 919px;
  padding: 16px 40px;
  background: #9999FF;
`;

//玫红
const Question2 = styled(StyledDiv)`
  width: 1008px;
  min-height: 265px;
  padding: 16px 40px 32px 40px;
  background: #FF77FF;
`;

const ApplyPage: React.FC = () => (
  <ApplyContainer>
    <Framework>
      <RoleDetails>
        Role Details
        <Framework7132></Framework7132>
      </RoleDetails>
      <ConfirmDetails>
        Confirm your details
      </ConfirmDetails>
      <Question1>
        Answer this question 1
      </Question1>
      <Question2>
        Answer this question 2
      </Question2>
        <DropdownHeader />
      
    </Framework>
  </ApplyContainer>

);

export default ApplyPage;
