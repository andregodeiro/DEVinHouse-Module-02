import React from "react";
import {
  FooterContainer,
  FooterText,
  LogoContainer,
  LogoText,
  MenuItem,
  MenuList,
  NavbarContainer,
} from "./styles";

export const Navbar = () => {
  return (
    <>
      {" "}
      <NavbarContainer>
        <LogoContainer>
          <LogoText>Hello, pizza!</LogoText>
        </LogoContainer>
        <MenuList>
          <MenuItem>Novo Pedido</MenuItem>
          <MenuItem>Pedidos</MenuItem>
          <MenuItem>Histórico</MenuItem>
          <MenuItem>Menu</MenuItem>
        </MenuList>
        <FooterContainer>
          <FooterText>
            "Hello, pizza!" © Todos os direitos reservados{" "}
          </FooterText>
          <FooterText>Developed by @andreegodeiro</FooterText>
        </FooterContainer>
      </NavbarContainer>{" "}
    </>
  );
};
