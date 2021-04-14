import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const Header = styled.header`
  color: black;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  text-align: center;
  margin-right: 30px;
  font-size: 30px;
  background-color: ${(props) => (props.current ? "pink" : "transparent")};
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <Link to="/">Prices</Link>
      </Item>
      <Item current={pathname === "/exchanges"}>
        <Link to="/exchanges">Exchanges</Link>
      </Item>
      <Item current={pathname === "/coins"}>
        <Link to="/coins">Coins</Link>
      </Item>
    </List>
  </Header>
));
