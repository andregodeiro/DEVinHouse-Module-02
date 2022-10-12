import React from "react";
import {
  FilterStatusContainer,
  FilterStatusOption,
  FilterStatusSelect,
  SearchbarContainer,
  SearchbarInput,
  SearchbarItens,
  SearchbarItem,
} from "./styles";

export const Searchbar = () => {
  return (
    <>
      <SearchbarContainer>
        <FilterStatusContainer>
          <FilterStatusSelect>
            <FilterStatusOption value={""}>Filtrar Status</FilterStatusOption>
            <FilterStatusOption>Na fila</FilterStatusOption>
            <FilterStatusOption>Preparando</FilterStatusOption>
            <FilterStatusOption>Pronto</FilterStatusOption>
            <FilterStatusOption>Cancelado</FilterStatusOption>
          </FilterStatusSelect>
        </FilterStatusContainer>
        <SearchbarInput placeholder="Insira o nome do cliente ou do item"></SearchbarInput>
        <SearchbarItens>
          <SearchbarItem>Menu</SearchbarItem>
          <SearchbarItem>Novo Pedido</SearchbarItem>
        </SearchbarItens>
      </SearchbarContainer>
    </>
  );
};
