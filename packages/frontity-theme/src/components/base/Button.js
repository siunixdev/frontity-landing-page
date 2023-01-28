import React from "react";
import { connect, css, styled } from "frontity";

function Button({ label="", link="", openNewTab=false, primary=true }) {
  return (
    <a href={link} target={openNewTab ? "_blank" : ""}>
      <FrontityButton primary={primary} >{label}</FrontityButton>
    </a>
  );
}

export default connect(Button);

const FrontityButton = styled.div`
  font-weight: bold;
  padding: 15px 25px;
  cursor: pointer;
  border-radius: 5px;
  ${({primary}) => primary ? css`
    color: #ffffff;
    background-color: #1f36bd;
  ` : css`
    color: #1f36bd;
    background-color: #ffffff;
  `}
`;
