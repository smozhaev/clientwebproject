import React, { useState } from "react";
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
    max-height: 100px;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: var(--theme-footer);
    color: var(--theme-text);
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

  return (
    <>
      <FooterContainer>
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
