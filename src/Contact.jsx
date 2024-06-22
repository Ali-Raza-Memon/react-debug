import React from 'react';
import styled from 'styled-components';
import Header from './components/Header'; // Import your Header component

const PageContainer = styled.div`
  background-color: #f2f2f2;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  padding-top: 60px; /* Adjust for fixed header */
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactDetails = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px;
`;

const ContactItem = styled.p`
  margin: 10px 0;
  font-size: 18px;
`;

const Contact = () => {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <ContactDetails>
          <h2>Contact Us</h2>
          <ContactItem>Aubrey Smith</ContactItem>
          <ContactItem>MED SOLUTION USA LLC</ContactItem>
          <ContactItem>AINA NAHEED H SHAIKH SOLE MBR 5900 BALCONES DR 18938 AUSTIN, TX 78731</ContactItem>
          <ContactItem>+17373101169</ContactItem>
          <ContactItem>medsolutionusa1200@gmail.com</ContactItem>
        </ContactDetails>
      </ContentContainer>
    </PageContainer>
  );
};

export default Contact;
