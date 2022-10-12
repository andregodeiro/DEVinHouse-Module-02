import styled from "styled-components";

export const SearchbarContainer = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 20px;
  margin-left: 16%;
  margin-top: 16px;
`;

export const FilterStatusContainer = styled.div``;

export const FilterStatusSelect = styled.select`
  border: none;
  border-radius: 10px;
  padding: 15px;
  background-color: #701a1a;
  color: white;
  font-size: 18px;
  outline-width: 0;
`;

export const FilterStatusOption = styled.option``;

export const SearchbarInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: #d9d9d9;
  min-width: 30%;
  padding: 15px;
  font-size: 18px;
  outline-width: 0;
`;

export const SearchbarItens = styled.div`
  display: flex;
  gap: 50px;
`;

export const SearchbarItem = styled.a`
  color: #701a1a;
  font-size: 18px;
  cursor: pointer;
`;
