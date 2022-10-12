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
import { BsPencilSquare } from "react-icons/bs";
import { BiBell, BiHistory, BiRestaurant } from "react-icons/bi";

export const Navbar = () => {
  return (
    <>
      {" "}
      <NavbarContainer>
        <LogoContainer>
          <LogoText>Hello, pizza!</LogoText>
        </LogoContainer>
        <MenuList>
          <MenuItem>
            <BsPencilSquare />
            Novo Pedido
          </MenuItem>
          <MenuItem>
            <BiBell />
            Pedidos
          </MenuItem>
          <MenuItem>
            {" "}
            <BiHistory />
            Histórico
          </MenuItem>
          <MenuItem>
            <BiRestaurant />
            Menu
          </MenuItem>
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
