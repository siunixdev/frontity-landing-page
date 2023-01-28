import React from "react";
import { connect, styled } from "frontity";
import Button from "./base/Button";

function Header({ state }) {
  const menus = state?.theme?.menu;
  return (
    <HeaderContent>
      <Title><a href="/">{state.frontity.title}</a></Title>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <Item key={index}>
              <a href={menu.link}>{menu.label}</a>
            </Item>
          );
        })}
      </Menu>
      {/* <Button label="Get Started" link="https://docs.frontity.org/getting-started/quick-start-guide" openNewTab={true} /> */}
    </HeaderContent>
  );
}

export default connect(Header);

const HeaderContent = styled.div`
  padding: 24px 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f3fc;
  color: #1f36bd;
  box-shadow: #bac8ff 0px 0px 30px 1px;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: bold;
`;

const Menu = styled.ul`
  font-weight: bold;
  list-style: none;
`;

const Item = styled.li`
  display: inline;
  margin-left: 50px;
  cursor: pointer;
  text-transform: uppercase;
`;
