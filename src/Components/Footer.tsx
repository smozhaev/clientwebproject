import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export interface StyledFooterProps {
  FooterColor?: string;
}

const Footer = () => {
  const FooterContainer = styled.div<StyledFooterProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: 100px;
    height: 100%;
    background-color: ${({ FooterColor }) =>
      FooterColor ? FooterColor : "#000000"};
    color: white;
  `;

  const NavContainer = styled.ul<StyledFooterProps>`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    min-width: 300px;
    max-width: 500px;
    width: 100%;
    min-height: 100px;
    height: 100%;
  `;

  const GlobalFooterStyles = createGlobalStyle`
    li [data-theme=light]{
      
    }
  `;

  return (
    <>
      <FooterContainer FooterColor="#343a40">
        <NavContainer>
          <li>telegram</li>
          <li>instagram</li>
          <li>VK</li>
        </NavContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
