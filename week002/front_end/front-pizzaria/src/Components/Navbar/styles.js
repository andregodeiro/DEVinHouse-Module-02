import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #d7c6b0;
  color: 00000;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  min-width: 16%;
  height: 100%;
`;

export const LogoContainer = styled.div`
  background-color: #701a1a;
  min-width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.h1`
  color: #e1c4c4;
  font-weight: 1;
  font-size: 50px;
  padding: 10px;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MenuItem = styled.li`
  font-size: 24px;
  cursor: pointer;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  gap: 5px;
  margin-bottom: 10%;
`;

export const FooterText = styled.div`
  font-size: 12px;
`;
