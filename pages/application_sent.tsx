import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 592px;
  height: 401px;
  position: absolute;
  top: 276px;
  left: 424px;
  gap 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  width: 592px;
  height: 225px;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

// const FeaturedIcon = styled.div`
//   width: 56px;
//   height: 56px;
//   padding: 14px;
//   border-radius: 28px;
//   background: #D0FC4A;
// `;

const TitleSubtitle = styled.div`
  width: 592px;
  height: 145px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  width: 501px;
  height: 10px;
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 38px;
  text-align: center;
  color: #111927;
`;

const Subtitle = styled.p`
  width: 592px;
  height: 96px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #4D5761;
`;

const Frame7105 = styled.div`
  width: 384px;
  height: auto;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button1 = styled.button`
  width: 384px;
  height: auto;
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid #4B48EC;
  box-shadow: 0px 1px 2px 0px #1018280D;
  background: #4B48EC;
  color: #FFFFFF;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center; 
`;

const Button2 = styled.button`
  width: 384px;
  height: auto;
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid #D2D6DB;
  background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #D2D6DB, #D2D6DB);
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  color: #384250;
  text-align: center;
`;

const ApplicationSent = () => (
  <Container>
    <Top>
      {/* <FeaturedIcon /> */} 
      <TitleSubtitle>
        <Title>Application sent</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci massa mauris justo, urna et feugiat sagittis et. Aliquet amet suspendisse tellus ultrices hac id imperdiet. Pellentesque sit sit suspendisse at. Mauris duis pharetra dictum aenean ac sed amet.</Subtitle>
      </TitleSubtitle>
    </Top>
    <Frame7105>
      <Button1>View application</Button1>
      <Button2>Home</Button2>
    </Frame7105>
  </Container>
);

export default ApplicationSent;


