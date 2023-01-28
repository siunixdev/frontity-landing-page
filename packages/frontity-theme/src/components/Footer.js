import React from "react";
import { styled } from "frontity";

function Footer() {
  return <FooterContent>&copy; Frontity Landing Page by Engine Room Global</FooterContent>;
}

export default Footer;

const FooterContent = styled.div`
  padding: 24px 200px;
  background-color: #1f36bd;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
`;
