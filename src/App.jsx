import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import backgroundImage from './assets/image1.jpg';
import backgroundImage2 from './assets/image2.jpg';
import backgroundImage3 from './assets/image3.jpg';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  background-color: #f2f2f2;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const CenteredText = styled.h2`
  font-size: 60px;
  font-weight: normal;
  color: #1a1a1a;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
`;

const Button = styled.button`
  position: relative;
  overflow: hidden;
  padding: 15px 30px;
  margin-top: 80px;
  font-size: 18px;
  font-weight: bold;
  color: #1a1a1a;
  background: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 25px;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #000;
    transform: scale(1.1);
    background-color: #fff;
  }
`;

const TextBelowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  background-color: rgba(173, 216, 230, 0.7);
  padding: 35px;
  text-align: center;
  border-radius: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1s ease-out;
  margin: 30px auto;
`;

const StyledSpan = styled.span`
  font-size: 22px;
  color: #1a1a1a;
  margin: 0 20px;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
`;

const BackgroundImageContainer = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  height: 400px;
  margin-top: 20px;
  animation: ${fadeIn} 1s ease-out;
  overflow: hidden;

  &.image2::after {
    content: 'Research Equipment';
    position: absolute;
    bottom: 50px;
    left: 60px;
    font-size: 30px;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
  }

  &.image3::after {
    content: 'Dental Equipment';
    position: absolute;
    bottom: 50px;
    left: 60px;
    font-size: 30px;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

const InViewWrapper = styled.div`
  animation: ${(props) => (props.inView ? fadeIn : 'none')} 1s ease-out;
`;

const App = () => {
  const [textBelowRef, textBelowInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [backgroundImage2Ref, backgroundImage2InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [backgroundImage3Ref, backgroundImage3InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleStoreButtonClick = () => {
    window.open('store.html', '_blank'); // Open the store page in a new tab
  };

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Header />
        <store/>
        <ContentContainer>
          <CenteredTextContainer>
            <CenteredText>𝑶𝒏𝒆 𝒑𝒍𝒂𝒄𝒆 𝒇𝒐𝒓 𝒂𝒍𝒍 𝒚𝒐𝒖𝒓 𝒉𝒐𝒔𝒑𝒊𝒕𝒂𝒍 𝒏𝒆𝒆𝒅𝒔</CenteredText>
            <Button onClick={handleStoreButtonClick}>Store →</Button>
          </CenteredTextContainer>
        </ContentContainer>
      </PageContainer>
      <InViewWrapper ref={textBelowRef} inView={textBelowInView}>
        <TextBelowBackground>
          <StyledSpan>𝑴𝒆𝒅 𝑺𝒐𝒍𝒖𝒕𝒊𝒐𝒏 𝑼𝑺𝑨 𝒎𝒂𝒌𝒆𝒔 𝒅𝒆𝒄𝒊𝒔𝒔𝒊𝒐𝒏 𝒎𝒂𝒌𝒊𝒏𝒈 𝒆𝒂𝒔𝒊𝒆𝒓</StyledSpan>
          <StyledSpan>With Equipment from all categories including medical and research equipment, we fulfill all your needs in one place</StyledSpan>
        </TextBelowBackground>
      </InViewWrapper>
      <InViewWrapper ref={backgroundImage2Ref} inView={backgroundImage2InView}>
        <BackgroundImageContainer className="image2" style={{ backgroundImage: `url(${backgroundImage2})` }} />
      </InViewWrapper>
      <InViewWrapper ref={backgroundImage3Ref} inView={backgroundImage3InView}>
        <BackgroundImageContainer className="image3" style={{ backgroundImage: `url(${backgroundImage3})` }} />
      </InViewWrapper>
    </>
  );
};

export default App;
